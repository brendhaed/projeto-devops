resource "aws_s3_bucket" "frontend_bucket" {
  bucket_prefix = "${var.project_name}-"

  tags = {
    Name    = var.project_name
    Purpose = "Armazenamento dos arquivos do frontend"
  }
}