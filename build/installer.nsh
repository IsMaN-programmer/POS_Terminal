; ============================================================
; POS Terminal - Custom NSIS Uninstaller Script
; Добавляет диалог "Очистить все данные" при удалении
; Реальные пути проверены: %APPDATA%\pos-terminal
;                          %LOCALAPPDATA%\pos-terminal-updater
; ============================================================

!macro customUnInstall
  MessageBox MB_YESNO|MB_ICONQUESTION \
    "Хотите полностью очистить все данные приложения?$\n$\nБудет удалено:$\n  - База данных (pos.db) со всеми товарами и продажами$\n  - Кэш, cookies и сессии браузера$\n  - LocalStorage и IndexedDB$\n  - Папка обновлятора$\n$\nВНИМАНИЕ: Данное действие необратимо!" \
    IDNO skip_clean IDYES do_clean

  do_clean:
    ; Завершаем все процессы приложения
    ExecWait 'taskkill /F /IM "POS Terminal.exe" /T'
    ExecWait 'taskkill /F /IM node.exe /T'
    Sleep 800

    ; === AppData\Roaming\pos-terminal ===
    ; (userData Electron: LocalStorage, IndexedDB, Cookies, GPUCache, SessionStorage)
    RMDir /r "$APPDATA\pos-terminal"

    ; === AppData\Local\pos-terminal-updater ===
    ; (папка обновлятора electron-builder)
    RMDir /r "$LOCALAPPDATA\pos-terminal-updater"

    ; === На всякий случай — альтернативные имена ===
    RMDir /r "$APPDATA\POS Terminal"
    RMDir /r "$LOCALAPPDATA\POS Terminal"
    RMDir /r "$LOCALAPPDATA\pos-terminal"

    ; === База данных в папке установки (если ещё не удалена NSIS) ===
    Delete "$INSTDIR\backend\server\pos.db"
    Delete "$INSTDIR\backend\server\debug.log"
    Delete "$INSTDIR\backend\server\server_out.log"
    Delete "$INSTDIR\backend\server\server_err.log"
    Delete "$INSTDIR\backend\.env"
    Delete "$INSTDIR\debug.log"

    MessageBox MB_OK|MB_ICONINFORMATION \
      "Все данные POS Terminal успешно удалены.$\n$\nПри следующей установке приложение будет абсолютно чистым."

  skip_clean:
!macroend
