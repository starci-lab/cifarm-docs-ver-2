interface Tool {
  name: string;
  image: string;
  description: string;
}

interface ToolsTableProps {
  tools: Array<Tool>;
}

export const ToolsTable = ({ tools }: ToolsTableProps) => {
  return (
    <div className="overflow-x-auto mt-5">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-2 text-left">Tool</th>
            <th className="p-2 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          {tools.map((tool, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">
                <div className="flex items-center gap-2">
                  <img 
                    src={tool.image} 
                    alt={tool.name} 
                    className="w-8 h-8 object-contain"
                  />
                  <span className="font-medium">{tool.name}</span>
                </div>
              </td>
              <td className="p-2">{tool.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
} 