export default {
  AIRFLOW__CORE__AIRFLOW_HOME: '',
  AIRFLOW__CORE__DAGS_FOLDER: '',
  AIRFLOW__CORE__BASE_LOG_FOLDER: '',
  AIRFLOW__CORE__REMOTE_LOGGING: '',
  AIRFLOW__CORE__REMOTE_LOG_CONN_ID: '',
  AIRFLOW__CORE__REMOTE_BASE_LOG_FOLDER: '',
  AIRFLOW__CORE__ENCRYPT_S3_LOGS: '',
  AIRFLOW__CORE__LOGGING_LEVEL: '',
  AIRFLOW__CORE__FAB_LOGGING_LEVEL: '',
  AIRFLOW__CORE__LOGGING_CONFIG_CLASS: '',
  AIRFLOW__CORE__LOG_FORMAT: '',
  AIRFLOW__CORE__SIMPLE_LOG_FORMAT: '',
  AIRFLOW__CORE__LOG_FILENAME_TEMPLATE: '',
  AIRFLOW__CORE__LOG_PROCESSOR_FILENAME_TEMPLATE: '',
  AIRFLOW__CORE__HOSTNAME_CALLABLE: '',
  AIRFLOW__CORE__DEFAULT_TIMEZONE: '',
  // AIRFLOW__CORE__EXECUTOR: '',
  // AIRFLOW__CORE__SQL_ALCHEMY_CONN: '',
  AIRFLOW__CORE__SQL_ALCHEMY_POOL_ENABLED: '',
  AIRFLOW__CORE__SQL_ALCHEMY_POOL_SIZE: '',
  AIRFLOW__CORE__SQL_ALCHEMY_POOL_RECYCLE: '',
  AIRFLOW__CORE__SQL_ALCHEMY_RECONNECT_TIMEOUT: '',
  AIRFLOW__CORE__PARALLELISM: '',
  AIRFLOW__CORE__DAG_CONCURRENCY: '',
  AIRFLOW__CORE__DAGS_ARE_PAUSED_AT_CREATION: '',
  AIRFLOW__CORE__NON_POOLED_TASK_SLOT_COUNT: '',
  AIRFLOW__CORE__MAX_ACTIVE_RUNS_PER_DAG: '',
  // AIRFLOW__CORE__LOAD_EXAMPLES: '',
  AIRFLOW__CORE__PLUGINS_FOLDER: '',
  // AIRFLOW__CORE__FERNET_KEY: '',
  AIRFLOW__CORE__DONOT_PICKLE: '',
  AIRFLOW__CORE__DAGBAG_IMPORT_TIMEOUT: '',
  AIRFLOW__CORE__TASK_RUNNER: '',
  AIRFLOW__CORE__DEFAULT_IMPERSONATION: '',
  AIRFLOW__CORE__SECURITY: '',
  AIRFLOW__CORE__SECURE_MODE: '',
  AIRFLOW__CORE__UNIT_TEST_MODE: '',
  AIRFLOW__CORE__TASK_LOG_READER: '',
  AIRFLOW__CORE__ENABLE_XCOM_PICKLING: '',
  AIRFLOW__CORE__KILLED_TASK_CLEANUP_TIME: '',
  AIRFLOW__CORE__DAG_RUN_CONF_OVERRIDES_PARAMS: '',
  AIRFLOW__CORE__WORKER_PRECHECK: '',
  AIRFLOW__CLI__API_CLIENT: '',
  AIRFLOW__CLI__ENDPOINT_URL: '',
  AIRFLOW__API__AUTH_BACKEND: '',
  AIRFLOW__API__BACKEND: '',
  AIRFLOW__ATLAS__SASL_ENABLED: '',
  AIRFLOW__ATLAS__HOST: '',
  AIRFLOW__ATLAS__PORT: '',
  AIRFLOW__ATLAS__USERNAME: '',
  AIRFLOW__ATLAS__PASSWORD: '',
  AIRFLOW__OPERATORS__DEFAULT_OWNER: '',
  AIRFLOW__OPERATORS__DEFAULT_CPUS: '',
  AIRFLOW__OPERATORS__DEFAULT_RAM: '',
  AIRFLOW__OPERATORS__DEFAULT_DISK: '',
  AIRFLOW__OPERATORS__DEFAULT_GPUS: '',
  AIRFLOW__HIVE__DEFAULT_HIVE_MAPRED_QUEUE: '',
  AIRFLOW__HIVE__MAPRED_JOB_NAME_TEMPLATE: '',
  // AIRFLOW__WEBSERVER__BASE_URL: '',
  AIRFLOW__WEBSERVER__WEB_SERVER_HOST: '',
  AIRFLOW__WEBSERVER__WEB_SERVER_PORT: '',
  AIRFLOW__WEBSERVER__WEB_SERVER_SSL_CERT: '',
  AIRFLOW__WEBSERVER__WEB_SERVER_SSL_KEY: '',
  AIRFLOW__WEBSERVER__WEB_SERVER_MASTER_TIMEOUT: '',
  AIRFLOW__WEBSERVER__WEB_SERVER_WORKER_TIMEOUT: '',
  AIRFLOW__WEBSERVER__WORKER_REFRESH_BATCH_SIZE: '',
  AIRFLOW__WEBSERVER__WORKER_REFRESH_INTERVAL: '',
  AIRFLOW__WEBSERVER__SECRET_KEY: '',
  AIRFLOW__WEBSERVER__WORKERS: '',
  AIRFLOW__WEBSERVER__WORKER_CLASS: '',
  AIRFLOW__WEBSERVER__ACCESS_LOGFILE: '',
  AIRFLOW__WEBSERVER__ERROR_LOGFILE: '',
  AIRFLOW__WEBSERVER__EXPOSE_CONFIG: '',
  AIRFLOW__WEBSERVER__AUTHENTICATE: '',
  AIRFLOW__WEBSERVER__FILTER_BY_OWNER: '',
  AIRFLOW__WEBSERVER__OWNER_MODE: '',
  AIRFLOW__WEBSERVER__DAG_DEFAULT_VIEW: '',
  AIRFLOW__WEBSERVER__DAG_ORIENTATION: '',
  AIRFLOW__WEBSERVER__DEMO_MODE: '',
  AIRFLOW__WEBSERVER__LOG_FETCH_TIMEOUT_SEC: '',
  AIRFLOW__WEBSERVER__HIDE_PAUSED_DAGS_BY_DEFAULT: '',
  AIRFLOW__WEBSERVER__PAGE_SIZE: '',
  AIRFLOW__WEBSERVER__RBAC: '',
  AIRFLOW__WEBSERVER__NAVBAR_COLOR: '',
  AIRFLOW__WEBSERVER__DEFAULT_DAG_RUN_DISPLAY_NUMBER: '',
  AIRFLOW__EMAIL__EMAIL_BACKEND: '',
  AIRFLOW__SMTP__SMTP_HOST: '',
  AIRFLOW__SMTP__SMTP_STARTTLS: '',
  AIRFLOW__SMTP__SMTP_SSL: '',
  AIRFLOW__SMTP__SMTP_USER: '',
  AIRFLOW__SMTP__SMTP_PASSWORD: '',
  AIRFLOW__SMTP__SMTP_PORT: '',
  AIRFLOW__SMTP__SMTP_MAIL_FROM: '',
  AIRFLOW__CELERY__CELERY_APP_NAME: '',
  AIRFLOW__CELERY__WORKER_CONCURRENCY: '',
  AIRFLOW__CELERY__WORKER_LOG_SERVER_PORT: '',
  // AIRFLOW__CELERY__BROKER_URL: '',
  // AIRFLOW__CELERY__RESULT_BACKEND: '',
  AIRFLOW__CELERY__FLOWER_HOST: '',
  AIRFLOW__CELERY__FLOWER_URL_PREFIX: '',
  AIRFLOW__CELERY__FLOWER_PORT: '',
  // AIRFLOW__CELERY__DEFAULT_QUEUE: '',
  AIRFLOW__CELERY__CELERY_CONFIG_OPTIONS: '',
  AIRFLOW__CELERY__SSL_ACTIVE: '',
  AIRFLOW__WEBSERVER__SSL_KEY: '',
  AIRFLOW__WEBSERVER__SSL_CERT: '',
  AIRFLOW__CELERY__SSL_CACERT: '',
  AIRFLOW__CELERY_BROKER_TRANSPORT_OPTIONS__VISIBILITY_TIMEOUT: '',
  AIRFLOW__DASK__CLUSTER_ADDRESS: '',
  AIRFLOW__DASK__TLS_CA: '',
  AIRFLOW__DASK__TLS_CERT: '',
  AIRFLOW__DASK__TLS_KEY: '',
  AIRFLOW__SCHEDULER__JOB_HEARTBEAT_SEC: '',
  // AIRFLOW__SCHEDULER__SCHEDULER_HEARTBEAT_SEC: '',
  AIRFLOW__SCHEDULER__RUN_DURATION: '',
  AIRFLOW__SCHEDULER__MIN_FILE_PROCESS_INTERVAL: '',
  AIRFLOW__SCHEDULER__DAG_DIR_LIST_INTERVAL: '',
  AIRFLOW__SCHEDULER__PRINT_STATS_INTERVAL: '',
  AIRFLOW__SCHEDULER__CHILD_PROCESS_LOG_DIRECTORY: '',
  AIRFLOW__SCHEDULER__SCHEDULER_ZOMBIE_TASK_THRESHOLD: '',
  AIRFLOW__SCHEDULER__CATCHUP_BY_DEFAULT: '',
  AIRFLOW__SCHEDULER__MAX_TIS_PER_QUERY: '',
  // AIRFLOW__SCHEDULER__STATSD_ON: '',
  // AIRFLOW__SCHEDULER__STATSD_HOST: '',
  // AIRFLOW__SCHEDULER__STATSD_PORT: '',
  // AIRFLOW__SCHEDULER__STATSD_PREFIX: '',
  AIRFLOW__SCHEDULER__MAX_THREADS: '',
  AIRFLOW__LDAP__URI: '',
  AIRFLOW__LDAP__USER_FILTER: '',
  AIRFLOW__LDAP__USER_NAME_ATTR: '',
  AIRFLOW__LDAP__GROUP_MEMBER_ATTR: '',
  AIRFLOW__LDAP__SUPERUSER_FILTER: '',
  AIRFLOW__LDAP__DATA_PROFILER_FILTER: '',
  AIRFLOW__LDAP__BIND_USER: '',
  AIRFLOW__LDAP__BIND_PASSWORD: '',
  AIRFLOW__LDAP__BASEDN: '',
  AIRFLOW__CELERY__CACERT: '',
  AIRFLOW__LDAP__SEARCH_SCOPE: '',
  AIRFLOW__MESOS__MASTER: '',
  AIRFLOW__MESOS__FRAMEWORK_NAME: '',
  AIRFLOW__MESOS__TASK_CPU: '',
  AIRFLOW__MESOS__TASK_MEMORY: '',
  AIRFLOW__MESOS__CHECKPOINT: '',
  AIRFLOW__MESOS__FAILOVER_TIMEOUT: '',
  AIRFLOW__MESOS__DEFAULT_PRINCIPAL: '',
  AIRFLOW__MESOS__DEFAULT_SECRET: '',
  AIRFLOW__MESOS__DOCKER_IMAGE_SLAVE: '',
  AIRFLOW__KERBEROS__CCACHE: '',
  AIRFLOW__MESOS__PRINCIPAL: '',
  AIRFLOW__KERBEROS__REINIT_FREQUENCY: '',
  AIRFLOW__KERBEROS__KINIT_PATH: '',
  AIRFLOW__KERBEROS__KEYTAB: '',
  AIRFLOW__GITHUB_ENTERPRISE__API_REV: '',
  AIRFLOW__ADMIN__HIDE_SENSITIVE_VARIABLE_FIELDS: '',
  AIRFLOW__ELASTICSEARCH__ELASTICSEARCH_HOST: '',
  AIRFLOW__ELASTICSEARCH__ELASTICSEARCH_LOG_ID_TEMPLATE: '',
  AIRFLOW__ELASTICSEARCH__ELASTICSEARCH_END_OF_LOG_MARK: '',
  AIRFLOW__KUBERNETES__WORKER_CONTAINER_REPOSITORY: '',
  AIRFLOW__KUBERNETES__WORKER_CONTAINER_TAG: '',
  AIRFLOW__KUBERNETES__WORKER_CONTAINER_IMAGE_PULL_POLICY: '',
  AIRFLOW__KUBERNETES__WORKER_DAGS_FOLDER: '',
  AIRFLOW__KUBERNETES__DELETE_WORKER_PODS: '',
  // AIRFLOW__KUBERNETES__NAMESPACE: '',
  AIRFLOW__KUBERNETES__AIRFLOW_CONFIGMAP: '',
  AIRFLOW__KUBERNETES__DAGS_VOLUME_SUBPATH: '',
  AIRFLOW__KUBERNETES__DAGS_VOLUME_CLAIM: '',
  AIRFLOW__KUBERNETES__LOGS_VOLUME_SUBPATH: '',
  AIRFLOW__KUBERNETES__LOGS_VOLUME_CLAIM: '',
  AIRFLOW__KUBERNETES__GIT_REPO: '',
  AIRFLOW__KUBERNETES__GIT_BRANCH: '',
  AIRFLOW__KUBERNETES__GIT_USER: '',
  AIRFLOW__KUBERNETES__GIT_PASSWORD: '',
  AIRFLOW__KUBERNETES__GIT_SUBPATH: '',
  AIRFLOW__KUBERNETES__GIT_SYNC_CONTAINER_REPOSITORY: '',
  AIRFLOW__KUBERNETES__GIT_SYNC_CONTAINER_TAG: '',
  AIRFLOW__KUBERNETES__GIT_SYNC_INIT_CONTAINER_NAME: '',
  AIRFLOW__KUBERNETES__WORKER_SERVICE_ACCOUNT_NAME: '',
  AIRFLOW__KUBERNETES__IMAGE_PULL_SECRETS: '',
  AIRFLOW__KUBERNETES__GCP_SERVICE_ACCOUNT_KEYS: '',
  AIRFLOW__KUBERNETES__IN_CLUSTER: '',
}
