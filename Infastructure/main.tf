terraform {


  cloud {
    organization = "vocaldate"

    workspaces {
      name = "vocaldate"
    }
  }
}

provider "google-beta" {
  project = "vocaldate"
  region  = "us-east1"
  zone    = "us-east1-a"
}

resource "google_sql_database_instance" "app" {
  name             = "app"
  database_version = "POSTGRES_11"
  region           = "us-east1"

  settings {
    tier = "db-f1-micro"
  }
}

resource "google_cloud_run_service" "default" {
  name     = "cloudrun-srv"
  location = "us-east1"

  template {
    spec {
      containers {
        image = "gcr.io/vocaldate/web:latest"
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
}

resource "google_artifact_registry_repository" "web" {
  provider = google-beta

  location      = "us-east1"
  repository_id = "web"
  description   = "web"
  format        = "DOCKER"
}