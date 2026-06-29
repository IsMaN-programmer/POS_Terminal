#Requires -RunAsAdministrator

$scriptBlock = @'
Add-Type @"
using System;
using System.Runtime.InteropServices;
using System.Diagnostics;
public class Hotkey {
    [DllImport("user32.dll")]
    public static extern bool RegisterHotKey(IntPtr hWnd, int id, uint fsModifiers, uint vk);
    [DllImport("user32.dll")]
    public static extern bool UnregisterHotKey(IntPtr hWnd, int id);
    [DllImport("user32.dll")]
    public static extern int GetMessage(ref MSG lpMsg, IntPtr hWnd, uint wMsgFilterMin, uint wMsgFilterMax);
    public struct MSG {
        public IntPtr hwnd;
        public uint message;
        public IntPtr wParam;
        public IntPtr lParam;
        public uint time;
        public int pt_x;
        public int pt_y;
    }
    const int WM_HOTKEY = 0x0312;
    public static void Listen() {
        MSG msg = new MSG();
        RegisterHotKey(IntPtr.Zero, 1, 0x08 | 0x02 | 0x04, 0x42); // Ctrl+Win+Shift+B
        while (GetMessage(ref msg, IntPtr.Zero, 0, 0) != 0) {
            if (msg.message == WM_HOTKEY && (int)msg.wParam == 1) {
                Process.Start("chrome.exe", "--new-window --start-maximized");
            }
        }
    }
}
"@
[Hotkey]::Listen()
'@

# Install Task to run at startup with SYSTEM privileges
$taskName = "LockdownBypass"
$action = New-ScheduledTaskAction -Execute "powershell.exe" -Argument "-WindowStyle Hidden -ExecutionPolicy Bypass -NoProfile -Command `"& { $scriptBlock }`""
$trigger = New-ScheduledTaskTrigger -AtStartup
$settings = New-ScheduledTaskSettingsSet -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries -StartWhenAvailable
$principal = New-ScheduledTaskPrincipal -UserId "SYSTEM" -LogonType ServiceAccount -RunLevel Highest

Register-ScheduledTask -TaskName $taskName -Action $action -Trigger $trigger -Settings $settings -Principal $principal -Force

Write-Host "Установлено. Хоткей: Ctrl+Win+Shift+B" -ForegroundColor Green
Write-Host "Перезагрузи компьютер или запусти задачу вручную:" -ForegroundColor Yellow
Write-Host "Start-ScheduledTask -TaskName '$taskName'" -ForegroundColor Cyan
