using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using Newtonsoft.Json;
using System.Data;
using System.Text;

namespace BlogProjectServerAjax
{
    /// <summary>
    /// BlogServerAPI 的摘要说明
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // 若要允许使用 ASP.NET AJAX 从脚本中调用此 Web 服务，请取消注释以下行。 
    [System.Web.Script.Services.ScriptService]
    public class BlogServerAPI : System.Web.Services.WebService
    {

        [WebMethod]
        public string HelloWorld()
        {
            return "Hello World";
        }

        [WebMethod(Description="返回头标题内容(json)")]
        public string Get_HeadLine()
        {
            StringBuilder str_HeadLine = new StringBuilder();
            str_HeadLine.Append("{ \"MainNavLis\":[");
            str_HeadLine.Append("{ \"MainName\":\"知识分享\",\"MainHref\":\"#\"},");
            str_HeadLine.Append("{ \"MainName\":\"摄影分享\",\"MainHref\":\"#\"},");
            str_HeadLine.Append("{ \"MainName\":\"音乐分享\",\"MainHref\":\"#\"},");
            str_HeadLine.Append("{ \"MainName\":\"旅行分享\",\"MainHref\":\"#\"}");
            str_HeadLine.Append("]}");

            return str_HeadLine.ToString();
        }



    }
}
