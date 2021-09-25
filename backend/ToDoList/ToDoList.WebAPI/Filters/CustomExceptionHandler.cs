using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Net;

namespace ToDoList.WebAPI.Filters
{
    public class CustomExceptionHandler : IExceptionFilter
    {
        public void OnException(ExceptionContext context)
        {
            var exception = context.Exception;

            switch (exception)
            {
                case ArgumentNullException:
                    context.Result = new JsonResult(exception.Message)
                    {
                        StatusCode = (int)HttpStatusCode.BadRequest
                    };
                    break;
                case ArgumentException:
                    context.Result = new JsonResult(exception.Message)
                    {
                        StatusCode = (int)HttpStatusCode.BadRequest
                    };
                    break;
                default:
                    context.Result = new JsonResult(exception.Message)
                    {
                        StatusCode = (int)HttpStatusCode.InternalServerError
                    };
                   break;
            }
        }
    }
}
