export default {
  workerSize:
    'Determines what resources (CPU and memory) are allocated to each celery worker.',
  workerCount:
    'How many celery workers you can send tasks to. By default, each worker is configured to handle up to 16 tasks at once. However, this will depend on what your tasks are actually doing.',
  workerTermination:
    'Workers restart after each deploy to make sure they are looking at the most up-to-date code. If a deploy is triggered while a worker is executing a task, the termination grace period determines how long the worker will keep executing the task before restarting.',
  astroUnit:
    'Astro Units define the additional resource quotas (capacity) for each deployment.',
  executor:
    'Airflow supports multiple executor plugins. These plugins determine how and where tasks are executed. We support the Local Executor for light or test workloads, and the Celery Executor for larger, production workloads. The Celery Executor uses a distributed task queue and a scalable worker pool. Support for the Kubernetes Executor is coming soon.',
  resourcesNew:
    'Your current configuration requires the following resources. You can manage capacities after deployment (eg. to use Pod Operator, increase memory, etc.).',
  webserver:
    'Manage the resource allocations for the webserver in Astro Units (AU).',
  scheduler:
    'Manage the resource allocations for the scheduler in Astro Units (AU).',
}
