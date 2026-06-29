; POS Terminal Inno Setup Installer
; Run: ISCC.exe installer.iss

#define MyAppName "POS Terminal"
#define MyAppVersion "1.0.0"
#define MyAppPublisher "POS Terminal"
#define MyAppExeName "start-pos.bat"
#define SourceDir "..\dist-pos"

[Setup]
AppId=B4A2B3C5-8D7E-4F1A-9C3D-6E5F2A1B8C4D
AppName={#MyAppName}
AppVersion={#MyAppVersion}
AppPublisher={#MyAppPublisher}
DefaultDirName={autopf}\{#MyAppName}
DefaultGroupName={#MyAppName}
AllowNoIcons=yes
OutputDir=..\
OutputBaseFilename=POS-Terminal-Setup-v{#MyAppVersion}
Compression=lzma2/ultra64
SolidCompression=yes
WizardStyle=modern
PrivilegesRequired=admin
UninstallDisplayIcon={app}\start-pos.bat
DisableProgramGroupPage=yes
CloseApplications=no

[Languages]
Name: "russian"; MessagesFile: "compiler:Default.isl"
Name: "english"; MessagesFile: "compiler:Languages\English.isl"

[Tasks]
Name: "desktopicon"; Description: "{cm:CreateDesktopIcon}"; GroupDescription: "{cm:AdditionalIcons}"; Flags: checkedonce

[Dirs]
Name: "{app}"

[Files]
Source: "{#SourceDir}\*"; DestDir: "{app}"; Flags: ignoreversion recursesubdirs createallsubdirs

[Icons]
Name: "{group}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"; WorkingDir: "{app}"
Name: "{group}\Open POS UI"; Filename: "http://localhost:80"
Name: "{group}\{cm:UninstallProgram,{#MyAppName}}"; Filename: "{uninstallexe}"
Name: "{autodesktop}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"; WorkingDir: "{app}"; Tasks: desktopicon

[Run]
Filename: "{app}\{#MyAppExeName}"; Description: "{cm:LaunchProgram,{#MyAppName}}"; Flags: nowait postinstall skipifsilent shellexec

[UninstallRun]
Filename: "taskkill"; Parameters: "/f /im node.exe"; Flags: runhidden

[Code]
function InitializeSetup: Boolean;
begin
  Result := True;
end;
