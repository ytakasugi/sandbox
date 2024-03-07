param (
    [Parameter(Mandatory=$true)]
    [string]$directory,
    [Parameter(Mandatory=$true)]
    [string]$regex,
    [Parameter(Mandatory=$true)]
    [string]$result_file
)

& python main.py $directory $regex $result_file