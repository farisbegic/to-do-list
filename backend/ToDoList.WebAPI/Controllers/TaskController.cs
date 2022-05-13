using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using ToDoList.Application.Models.Tasks;
using ToDoList.Application.Services.Tasks;

namespace ToDoList.WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TaskController : ControllerBase
    {
        private readonly ITaskService _taskService;

        public TaskController(ITaskService taskService)
        {
            _taskService = taskService;
        }

        [HttpPost]
        public async Task<ActionResult<TaskResponse>> CreateAsync([FromBody] CreateTaskRequest request)
        {
            var result = await _taskService.CreateAsync(request);
            return CreatedAtRoute("GetTask", result, result);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<DeleteTaskResponse>> DeleteAsync([FromRoute] int id)
        {
            var result = await _taskService.DeleteAsync(id);
            return Ok(result);
        }

        [HttpGet]
        public async Task<ActionResult<List<TaskResponse>>> GetAsync()
        {
            var result = await _taskService.GetAsync();
            return Ok(result);
        }

        [HttpGet("{id}", Name = "GetTask")]
        public async Task<ActionResult<TaskResponse>> GetAsync([FromRoute] int id)
        {
            var result = await _taskService.GetAsync(id);
            return Ok(result);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<TaskResponse>> UpdateAsync([FromRoute] int id, [FromBody] UpdateTaskRequest request)
        {
            var result = await _taskService.UpdateAsync(id, request);
            return Ok(result);
        }
    }
}
