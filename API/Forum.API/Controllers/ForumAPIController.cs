using Forum.Service.IService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace Forum.API.Controllers
{
    [RoutePrefix("ForumAPI")]
    public class ForumAPIController : ApiController
    {

        #region Private

        private IForumService _IForumService = null;
        private System.Net.Http.HttpResponseMessage httpResponseMessage = null;

        #endregion

        public ForumAPIController(IForumService IForumService)
        {
            _IForumService = IForumService;
        }

        [HttpGet]
        [Route("Login")]
        [ActionName("Login")]
        public HttpResponseMessage Login()
        {
            httpResponseMessage = new HttpResponseMessage();
            httpResponseMessage = Request.CreateResponse(HttpStatusCode.OK, "Success");

            return httpResponseMessage;
        }

    }
}
