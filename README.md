# 🧩 Diagrama de Infraestructura — SkillStream (Fase 3: Operacionalización y Resiliencia)

```mermaid
flowchart LR
  subgraph Cluster["Kubernetes Cluster"]
    direction TB
    ING["Ingress / API Gateway"]
    SM["Service Mesh: Istio o Linkerd"]
    subgraph NS_API["Namespaces"]
      direction LR
      APISvc["API Gateway (Node o Go)"]
      Users["Usuarios Service (Docker)"]
      Subs["Subscripciones Service (Docker)"]
      Payments["Pagos Service (Docker)"]
      Catalog["Catálogo Service (Docker)"]
      Media["Media Service (Docker + Blob Mount)"]
      Reco["Recomendaciones Service (Docker)"]
    end
    DB_USR["Postgres (usuarios)"]
    DB_SUB["Postgres (subscripciones)"]
    DB_PAY["Postgres (pagos + ledger)"]
    ObjectStore["S3 o MinIO"]
    CDN["CDN"]
    Cache["Redis"]
    MQ["Kafka o RabbitMQ"]
    Prom["Prometheus"]
    Graf["Grafana"]
    Jaeger["Jaeger / OpenTelemetry"]
    ELK["ElasticSearch + Kibana + Filebeat"]
    OCI["CI/CD: GitHub Actions → ArgoCD o Flux"]
  end

  ING --> APISvc
  APISvc --> SM
  SM -->|HTTP o gRPC| Users
  SM -->|HTTP o gRPC| Subs
  SM -->|HTTP o gRPC| Payments
  SM -->|HTTP o gRPC| Catalog
  SM -->|HTTP o gRPC| Media
  SM -->|HTTP o gRPC| Reco

  Users --> DB_USR
  Subs --> DB_SUB
  Payments --> DB_PAY
  Media --> ObjectStore
  Media --> CDN
  Catalog --> DB_SUB
  Reco --> MQ
  Reco --> Cache

  Payments -->|events| MQ
  Subs -->|events| MQ
  Catalog -->|events| MQ

  SM ---|observability| Jaeger
  SM ---|metrics| Prom
  SM ---|logs| ELK
  Prom --> Graf
  AllLogs["Pod logs (Filebeat)"] --> ELK

  OCI --> APISvc
  OCI --> Users
  OCI --> Subs
  OCI --> Payments
  OCI --> Catalog
  OCI --> Media
  OCI --> Reco
  Payments -. "Circuit Breaker" .-> Subs

  subgraph Observability["Observability & Ops"]
    direction LR
    Jaeger
    Prom
    Graf
    ELK
  end
