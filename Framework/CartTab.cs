using System.Linq;
using Glimpse.AspNet.Extensibility;
using Glimpse.AspNet.Extensions;
using Glimpse.Core.Extensibility;
using Glimpse.Core.Tab.Assist;
using MvcMusicStore.Models;

namespace MvcMusicStore.Framework
{
    public class CartTab : AspNetTab
    { 
        public override string Name
        {
            get { return "Cart"; }
        }

        public override object GetData(ITabContext context)
        {
            var httpContext = context.GetHttpContext();

            var cart = ShoppingCart.GetCart(httpContext);
            var items = cart.GetCartDetials();

            return items;
        }

        public override RuntimeEvent ExecuteOn
        {
            get { return RuntimeEvent.EndSessionAccess; }
        }
    }
}