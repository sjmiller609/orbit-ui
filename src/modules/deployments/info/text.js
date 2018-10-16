export default {
  workerSize:
    'Determines what resources (CPU and memory) are allocated to each celery worker.',
  workerCount:
    'How many celery workers you can send tasks to. By default, each worker is configured to handle up to 16 tasks at once. However, this will depend on what your tasks are actually doing.',
  workerTermination:
    'Workers restart after each deploy to make sure they are looking at the most up-to-date code. If a deploy is triggered while a worker is executing a task, the termination grace period determines how long the worker will keep executing the task before restarting.',
  astroUnit:
    'Astro Units define the resource quotas (capacity) for each deployment.',
  executor:
    'Airflow supports multiple executor plugins. These plugins determine how and where tasks are executed. We support the LocalExecutor for light or test workloads, and the CeleryExecutor for larger, production workloads. The CeleryExecutor uses a distributed task queue and a scalable worker pool. Support for the KubernetesExecutor is coming soon.',
}
