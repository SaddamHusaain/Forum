using Forum.Repository.IRepository;
using Forum.Service.IService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Forum.Service.Service
{
    public class ForumService: IForumService
    {
        #region Private

        private IForumRepository _IForumRepository;

        #endregion

        public ForumService(IForumRepository IForumRepository)
        {
            _IForumRepository = IForumRepository;
        }
    }
}
