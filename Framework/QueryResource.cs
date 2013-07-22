using System.Collections.Generic;
using System.Linq;
using Dapper;
using Glimpse.Core.Extensibility;
using Glimpse.Core.Extensions;
using Glimpse.Core.Framework;
using Glimpse.Core.ResourceResult;

namespace MvcMusicStore.Framework
{
    public class QueryResource : IResource
    { 
        private const string QueryKey = "query";

        public string Name
        {
            get { return "music_query"; }
        }

        public IEnumerable<ResourceParameterMetadata> Parameters
        {
            get { return new[] { new ResourceParameterMetadata(QueryKey) }; }
        }

        public IResourceResult Execute(IResourceContext context)
        {
            var queryValue = context.Parameters.GetValueOrDefault(QueryKey);

            using (var connection = SqlMapper.CreateConnection())
            {
                var data = connection.Query(queryValue).ToList();

                return new CacheControlDecorator(0, CacheSetting.NoCache, new JsonResourceResult(data, null));
            } 
        }
    }
}