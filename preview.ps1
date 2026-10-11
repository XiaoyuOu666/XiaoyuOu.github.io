param([int]$Port = 4173)
$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath $PSScriptRoot
$taskTools = Join-Path (Split-Path $PSScriptRoot -Parent) '.tools'
$taskRuby = Join-Path $taskTools 'rubyinstaller-3.3.5-1-x64\bin'
if (Test-Path -LiteralPath $taskRuby) {
    $env:PATH = $taskRuby + ';' + $env:PATH
    $env:MSYS2_PATH = Join-Path $taskTools 'msys64'
}
if (-not (Get-Command bundle -ErrorAction SilentlyContinue)) {
    throw 'Ruby/Bundler is required. See README.md for setup instructions.'
}
Write-Host "Local preview: http://127.0.0.1:$Port/"
# Invoke Jekyll inside Ruby to support workspace paths containing spaces.
& ruby -r bundler/setup -e 'load Gem.bin_path("jekyll", "jekyll")' -- serve --baseurl '' --host 127.0.0.1 --port $Port --livereload
if ($LASTEXITCODE -ne 0) { throw 'The preview could not start. See the build output above.' }
