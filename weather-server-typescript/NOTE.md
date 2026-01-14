# MCP Server playgroud

Test questions(US based):

- 加州最近天气如何？
- 华盛顿有什么天气预警？
- What’s the weather in Sacramento?
- What are the active weather alerts in Texas?

Claud mcp config for node: `vi ~/Library/Application\ Support/Claude/claude_desktop_config.json`

```
{
  "mcpServers": {
    "weather": {
      "command": "node",
      "args": ["/Users/rj/dev/ailab/mcp-quickstart/weather-server-typescript/build/index.js"]
    }
  }
}
```

for bun reference

```
{
  "isUsingBuiltInNodeForMcp": true,
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/rj/tmp"
      ]
    },
    "weather": {
      "command": "/Users/rj/.bun/bin/bun",
      "args": [
        "/Users/rj/dev/ailab/weather/index.ts"
      ]
    }
  }
}
```


## Links

- https://modelcontextprotocol.io/docs/develop/build-server
