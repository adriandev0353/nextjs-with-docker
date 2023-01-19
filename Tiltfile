docker_build('sweezed/auth:latest', './auth', live_update=[
  sync('./auth/src', '/app/src')
])
k8s_yaml('./auth/k8s/deploy.yml')

docker_build('sweezed/gl_client:latest', './client', live_update=[
  sync('./client/pages', '/app/pages')
])
k8s_yaml('./client/k8s/deploy.yml')

docker_build('sweezed/gl_tickets:latest', './tickets', live_update=[
  sync('./tickets/src', '/app/src')
])
k8s_yaml('./tickets/k8s/deploy.yml')

k8s_yaml(['./infra/k8s/ingress.yml','./infra/k8s/ingress_health.yml' ])

k8s_yaml([
'./infra/k8s/auth-mongo-deploy.yml',
'./infra/k8s/tickets-mongo-deploy.yml'
])

k8s_resource(new_name='ingress', objects=['ingress-srvc'])
k8s_resource(new_name='ingress-health', objects=['api-client-ingress'])