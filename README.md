# Impesoft website

This repository contains the current Impesoft portfolio site for Ward Impe.

## Stack

- Blazor WebAssembly
- .NET 10
- Static assets in `wwwroot`

## Main areas

- `Pages/` contains routed pages such as home, about, services, projects, contact, CV, and education/work.
- `Components/` contains reusable site sections and UI widgets.
- `Layout/` contains the shared layout and navigation.
- `wwwroot/` contains CSS, images, icons, and host-specific static files.

## Local development

```powershell
dotnet run --project .\www.impesoft.com.csproj
```

The local launch settings also expose development URLs through Visual Studio or `dotnet run`.

## Azure DevOps build

`azure-pipelines.yml` publishes the Blazor site into a static artifact so it can be deployed by Azure DevOps release or deployment stages.
