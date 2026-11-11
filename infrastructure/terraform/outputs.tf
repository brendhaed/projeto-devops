output "bucket_name" {
  description = "Nome do bucket S3 criado para o frontend"
  value       = aws_s3_bucket.frontend_bucket.bucket
}