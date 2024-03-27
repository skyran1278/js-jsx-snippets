import { commands, window } from 'vscode';

export const showRestartMessage = async () => {
  setTimeout(() => {
    window
      .showWarningMessage(
        'Js Jsx Snippets: Please restart VS Code to apply snippet formatting changes',
        'Restart VS Code',
        'Ignore',
      )
      .then((action?: string) => {
        if (action === 'Restart VS Code') {
          commands.executeCommand('workbench.action.reloadWindow');
        }
      });
  }, 1000);
};
