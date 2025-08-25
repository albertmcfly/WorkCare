function ApiEndpoints() {
  const endpoints = [
    {
      method: "GET",
      path: "/health",
      description: "Verificar estado de la API y modelo",
      color: "green",
    },
    {
      method: "POST",
      path: "/detect",
      description: "Detectar EPP en imagen enviada",
      color: "blue",
    },
    {
      method: "GET",
      path: "/tiempo_real",
      description: "Stream de video en tiempo real",
      color: "green",
    },
    {
      method: "GET",
      path: "/config",
      description: "Obtener configuración actual",
      color: "green",
    },
  ]

  return (
    <section className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <i className="fas fa-book text-primary mr-3"></i>
        Documentación de la API
      </h2>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Lista de Endpoints */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Endpoints Principales</h3>
          <div className="space-y-4">
            {endpoints.map(({ method, path, description, color }) => (
              <div key={path} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`bg-${color}-100 text-${color}-800 px-2 py-1 rounded text-sm font-mono`}
                  >
                    {method}
                  </span>
                  <code className="text-sm text-gray-600">{path}</code>
                </div>
                <p className="text-sm text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ApiEndpoints
