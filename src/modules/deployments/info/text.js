export default {
  workerSize:
    'Determines what resources (CPU and memory) are allocated to each celery worker.',
  workerCount:
    'How many celery workers you can send tasks to. By default, each worker is configured to handle up to 16 tasks at once.',
  workerTermination:
    'Workers restart after each deploy to make sure they are looking at updated code. If a deploy is triggered while a worker is executing a task, the termination grace period determines how long the worker will keep executing the task before restarting.',
  astroUnit:
    'Astronomer Units define the additional resource quotas (capacity) for each deployment.',
  executor:
    'Airflow supports multiple executor plugins. These plugins determine how and where tasks are executed. We support the Local Executor for light or test workloads, and the Celery and Kubernetes Executors for larger, production workloads. The Celery Executor uses a distributed task queue and a scalable worker pool, whereas the Kubernetes Executor launches every task in a separate Kubernetes pod.',
  resourcesNew:
    'Your current configuration requires the following resources. You can manage capacities after deployment if you would like to to use the Kubernetes Pod Operator, increase memory, etc.',
  webserver:
    'Manage the resource allocations for the webserver in Astronomer Units (AU).',
  scheduler:
    'Manage the resource allocations for the scheduler in Astronomer Units (AU).',
  adminPaywall:
    'Please add a payment method to your Workspace to continue using Astronomer. Your deployment will be deleted in 7 days if we do not hear from you.',
  nonadminPaywall:
    'Please ask your Workspace Admin to add a payment method to this Workspace in order to continue using Astronomer. Your deployment will be deleted in 7 days if we do not hear from you.',
}
