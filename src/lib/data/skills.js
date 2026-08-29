export const skillCategories = [
  {
    id: 'languages',
    label: 'Languages',
    icon: '💻',
    color: '#0e7490',
    skills: [
      { id: 'golang', label: 'Golang', desc: 'My favorite language for concurrent systems, APIs, and backend services — the entire DevGPT platform is written in Go', r: 22 },
      { id: 'typescript', label: 'TypeScript', desc: 'Type-safe JavaScript for scalable applications' },
      { id: 'python', label: 'Python', desc: 'Scripting, data processing, and ML workflows' },
      { id: 'sql', label: 'SQL', desc: 'Relational database querying and design' },
      { id: 'javascript', label: 'JavaScript', desc: 'Frontend and Node.js applications' },
      { id: 'rust', label: 'Rust*', desc: 'Systems programming and performance-critical code. Hot path only' }
    ]
  },
  {
    id: 'databases',
    label: 'Databases',
    icon: '🗄️',
    color: '#7c9e87',
    skills: [
      { id: 'postgres', label: 'Postgres / Aurora', desc: 'Relational databases, complex queries, ACID compliance' },
      { id: 'redis', label: 'Redis / Elasticache', desc: 'Caching, pub/sub, session storage, real-time data' },
      { id: 'elasticsearch', label: 'Elasticsearch / OpenSearch', desc: 'Full-text search, log aggregation, analytics' },
      { id: 'dynamodb', label: 'DynamoDB', desc: 'NoSQL key-value, high-scale applications' },
      { id: 'snowflake', label: 'Snowflake', desc: 'Cloud data warehouse, analytics at scale' }
    ]
  },
  {
    id: 'orchestration',
    label: 'Orchestration',
    icon: '⚙️',
    color: '#8b7ec8',
    skills: [
      { id: 'temporal', label: 'Temporal', desc: 'Workflow orchestration, distributed state machines' },
      { id: 'kubernetes', label: 'Kubernetes / EKS', desc: 'Container orchestration, service deployment' },
      { id: 'karpenter', label: 'Karpenter', desc: 'Just-in-time node provisioning for k8s' },
      { id: 'keda', label: 'KEDA', desc: 'Event-driven autoscaling for containers' },
      { id: 'sqs', label: 'SQS', desc: 'Message queuing, decoupled async workflows' },
      { id: 'kafka', label: 'Kafka', desc: 'Streaming platform, real-time event processing' },
      { id: 'airflow', label: 'Airflow', desc: 'ETL pipelines, scheduled workflows' },
      { id: 'nats', label: 'NATS', desc: 'Lightweight messaging, microservices communication' }
    ]
  },
  {
    id: 'ai',
    label: 'AI / ML',
    icon: '🤖',
    color: '#d4856a',
    skills: [
      { id: 'anthropic', label: 'Anthropic', desc: 'Claude models, prompt engineering, and prompt caching at scale', r: 20 },
      { id: 'openai', label: 'OpenAI', desc: 'GPT models, embeddings, chat completions' },
      { id: 'google', label: 'Google', desc: '. Gemini and Vertex AI integrations' }
    ]
  },
  {
    id: 'observability',
    label: 'Observability',
    icon: '📊',
    color: '#6a9fd4',
    skills: [
      { id: 'datadog', label: 'Datadog', desc: 'APM, logs, metrics, dashboards, alerting' },
      { id: 'opentelemetry', label: 'OpenTelemetry', desc: 'Instrumentation, distributed tracing standards' },
      { id: 'phoenix', label: 'Phoenix', desc: 'Real-time observability, custom metrics' },
      { id: 'dynatrace', label: 'Dynatrace', desc: 'Full-stack monitoring, AIOps' }
    ]
  },
  {
    id: 'cicd',
    label: 'CI / CD',
    icon: '🚀',
    color: '#a8c47c',
    skills: [
      { id: 'jenkins', label: 'Jenkins', desc: 'Pipeline automation, plugin ecosystem' },
      { id: 'spinnaker', label: 'Spinnaker', desc: 'Multi-cloud deployments, canary analysis' },
      { id: 'terraform', label: 'Terraform', desc: 'Infrastructure as code, multi-provider support' },
      { id: 'kustomize', label: 'Kustomize', desc: 'Kubernetes manifest customization, overlays' },
      { id: 'kaniko', label: 'Kaniko', desc: 'Container image building in k8s clusters' }
    ]
  },
  {
    id: 'frontend',
    label: 'Frontend',
    icon: '🎨',
    color: '#c47ca8',
    skills: [
      { id: 'svelte', label: 'Svelte', desc: 'Compile-time framework, reactive UI' },
      { id: 'react', label: 'React', desc: 'Component-based, hooks ecosystem' },
      { id: 'nextjs', label: 'Next.js', desc: 'SSR, SSG, fullstack React framework' },
      { id: 'tailwinds', label: 'Tailwinds', desc: 'Utility-first CSS, responsive design' },
      { id: 'vite', label: 'Vite', desc: 'Fast bundler, dev server, HMR' }
    ]
  },
  {
    id: 'servicemesh',
    label: 'Service Mesh',
    icon: '🔗',
    color: '#d48b8b',
    skills: [
      { id: 'istio-ambient', label: 'Istio Ambient', desc: 'Lightweight service mesh, simplified architecture' },
      { id: 'istio', label: 'Istio', desc: 'Traffic mgmt, security, observability for microservices' },
      { id: 'envoy', label: 'Envoy', desc: 'Proxy, load balancing, service discovery' },
      { id: 'linkerd', label: 'Linkerd', desc: 'Lightweight service mesh, Rust-based' }
    ]
  },
  {
    id: 'networking',
    label: 'Networking',
    icon: '🌐',
    color: '#8bd4b8',
    skills: [
      { id: 'cilium', label: 'Cilium', desc: 'eBPF networking, security policies, service mesh' },
      { id: 'network-policies', label: 'Network Policies', desc: 'Kubernetes traffic control, micro-segmentation' },
      { id: 'cni', label: 'CNI', desc: 'Container network interfaces, pod networking' }
    ]
  }
];