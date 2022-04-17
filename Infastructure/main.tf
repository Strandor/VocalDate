terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "3.5.0"
    }
  }

  cloud {
    organization = "vocaldate"

    workspaces {
      name = "vocaldate"
    }
  }
}

provider "google" {
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
        image = "us-docker.pkg.dev/cloudrun/container/hello"
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
}

resource "google_artifact_registry_repository" "web" {
  location = "us-east1"
  repository_id = "web"
  description = "web docker repository"
  format = "DOCKER"
}