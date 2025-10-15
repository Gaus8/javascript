# 🧩 Diagrama de Infraestructura — SkillStream (Fase 3: Operacionalización y Resiliencia)

Este diagrama muestra cómo se despliega la arquitectura de microservicios en Kubernetes, con observabilidad y resiliencia.

```mermaid
flowchart LR
  subgraph Cluster[Kubernetes Cluster]
    direction TB
    ING[Ingress / API Gateway]
    SM[Service Mesh (Istio/Linkerd)]
    subgraph NS_API[Namespaces]
      direction LR
      APISvc[API Gateway (Node/Go)]
      Users[Usuarios Service\n(Docker)]
      Subs[Subscripciones Service\n(Docker)]
      Payments[Pagos Service\n(Docker)]
      Catalog[Catálogo Service\n(Docker)]
      Media[Media Service\n(Docker + Blob Mount)]
      Reco[Recomendaciones Service\n(Docker)]
    end
    DB_USR[(Postgres - usuarios)]
    DB_SUB[(Postgres - subscripciones)]
    DB_PAY[(Postgres - pagos + ledger)]
    ObjectStore[(S3 / MinIO)]
    CDN[CDN]
    Cache[(Redis)]
    MQ[(Kafka / RabbitMQ)]
    Prom[Prometheus]
    Graf[Grafana]
    Jaeger[Jaeger / OpenTelemetry]
    ELK[ElasticSearch + Kibana + Filebeat]
    OCI[CI/CD: GitHub Actions → ArgoCD / Flux]
  end

  ING --> APISvc
  APISvc --> SM
  SM -->|HTTP/gRPC| Users
  SM -->|HTTP/gRPC| Subs
  SM -->|HTTP/gRPC| Payments
  SM -->|HTTP/gRPC| Catalog
  SM -->|HTTP/gRPC| Media
  SM -->|HTTP/gRPC| Reco

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
  AllLogs["Pod logs \n(filebeat) "] --> ELK

  OCI --> APISvc
  OCI --> Users
  OCI --> Subs
  OCI --> Payments
  OCI --> Catalog
  OCI --> Media
  OCI --> Reco
  Payments -. CircuitBreaker .-> Subs
  classDef cb fill:#ffefc6,stroke:#b58200
  class Payments,Subs cb
  subgraph Observability[Observability & Ops]
    direction LR
    Jaeger
    Prom
    Graf
    ELK
  end
