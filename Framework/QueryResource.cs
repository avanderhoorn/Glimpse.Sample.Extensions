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
        public string Name
        {
            get { return "music_query"; }
        }

        public IEnumerable<ResourceParameterMetadata> Parameters
        {
            get { return null; }
        }

        public IResourceResult Execute(IResourceContext context)
        {
            return new JsonResourceResult(new { Test = 1, Best = 2 }, null);
        }
    }
}