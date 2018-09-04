export default {
  workerSize:
    'Determines what resources (CPU and memory) are allocated to each celery worker.',
  workerCount:
    'How many celery workers you can send tasks to. By default, each worker is configured to handle up to 16 tasks at once. However, this will depend on what your tasks are actually doing.',
  workerTermination:
    'Workers restart after each deploy to make sure they are looking at the most up-to-date code. If a deploy is triggered while a worker is executing a task, the termination grace period determines how long the worker will keep executing the task before restarting.',
}
