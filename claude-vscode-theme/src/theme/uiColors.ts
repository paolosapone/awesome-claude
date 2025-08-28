import type { WorkbenchColors, ThemeContext } from '../types';
import { opacity, shade, mix, transparent } from './utilities';

export function getUiColors(context: ThemeContext): WorkbenchColors {
  const { palette, ansiColors, options, variant } = context;
  const accent = palette[options.accent];
  const isHighContrast = variant.includes('high-contrast');
  const isDark = variant.includes('dark');
  
  // Workbench modes
  const workbenchBase = options.workbenchMode === 'minimal' ? palette.base :
                        options.workbenchMode === 'flat' ? palette.mantle :
                        palette.crust;
  
  const dropBackground = opacity(accent, 0.2);
  const border = isHighContrast ? opacity(palette.overlay0, 0.2) : transparent;
  
  // Bracket colors for rainbow mode
  const bracketColors = options.bracketMode === 'rainbow' ? [
    palette.red,
    palette.orange,
    palette.yellow,
    palette.green,
    palette.blue,
    palette.purple,
  ] : options.bracketMode === 'dimmed' ? [
    opacity(palette.red, 0.6),
    opacity(palette.orange, 0.6),
    opacity(palette.yellow, 0.6),
    opacity(palette.green, 0.6),
    opacity(palette.blue, 0.6),
    opacity(palette.purple, 0.6),
  ] : [
    palette.overlay1,
    palette.overlay1,
    palette.overlay1,
    palette.overlay1,
    palette.overlay1,
    palette.overlay1,
  ];
  
  return {
    // Base colors
    'focusBorder': accent,
    'foreground': palette.text,
    'disabledForeground': palette.subtext0,
    'widget.shadow': opacity(palette.crust, 0.3),
    'selection.background': opacity(accent, 0.3),
    'descriptionForeground': palette.subtext1,
    'errorForeground': palette.red,
    'icon.foreground': accent,
    'sash.hoverBorder': accent,
    
    // Window border
    'window.activeBorder': transparent,
    'window.inactiveBorder': transparent,
    
    // Text colors
    'textBlockQuote.background': palette.mantle,
    'textBlockQuote.border': palette.crust,
    'textCodeBlock.background': palette.mantle,
    'textLink.activeForeground': shade(palette.blue, 0.2),
    'textLink.foreground': palette.blue,
    'textPreformat.foreground': palette.text,
    'textSeparator.foreground': accent,
    
    // Activity Bar
    'activityBar.background': workbenchBase,
    'activityBar.foreground': accent,
    'activityBar.dropBorder': dropBackground,
    'activityBar.inactiveForeground': palette.overlay0,
    'activityBar.border': border,
    'activityBarBadge.background': accent,
    'activityBarBadge.foreground': palette.white,
    'activityBar.activeBorder': accent,
    'activityBar.activeBackground': opacity(accent, 0.1),
    'activityBar.activeFocusBorder': accent,
    'activityBarTop.foreground': accent,
    'activityBarTop.activeBorder': accent,
    'activityBarTop.inactiveForeground': palette.overlay0,
    'activityBarTop.dropBorder': dropBackground,
    
    // Badge
    'badge.background': palette.surface1,
    'badge.foreground': palette.text,
    
    // Breadcrumb
    'breadcrumb.activeSelectionForeground': accent,
    'breadcrumb.background': palette.base,
    'breadcrumb.focusForeground': accent,
    'breadcrumb.foreground': palette.subtext0,
    'breadcrumbPicker.background': palette.mantle,
    
    // Buttons
    'button.background': accent,
    'button.foreground': palette.white,
    'button.border': transparent,
    'button.separator': opacity(palette.white, 0.3),
    'button.hoverBackground': shade(accent, 0.1),
    'button.secondaryForeground': palette.text,
    'button.secondaryBackground': palette.surface1,
    'button.secondaryHoverBackground': palette.surface2,
    'checkbox.background': palette.surface1,
    'checkbox.border': border,
    'checkbox.foreground': accent,
    
    // Dropdown
    'dropdown.background': palette.mantle,
    'dropdown.listBackground': palette.surface1,
    'dropdown.border': accent,
    'dropdown.foreground': palette.text,
    
    // Editor
    'editor.background': palette.base,
    'editor.foreground': palette.text,
    'editorLineNumber.foreground': palette.overlay0,
    'editorLineNumber.activeForeground': palette.text,
    'editorCursor.foreground': accent,
    'editor.selectionBackground': opacity(accent, 0.3),
    'editor.selectionHighlightBackground': opacity(accent, 0.2),
    'editor.inactiveSelectionBackground': opacity(accent, 0.15),
    'editor.wordHighlightBackground': opacity(accent, 0.15),
    'editor.wordHighlightStrongBackground': opacity(accent, 0.25),
    'editor.findMatchBackground': opacity(palette.orange, 0.3),
    'editor.findMatchHighlightBackground': opacity(palette.orange, 0.15),
    'editor.findRangeHighlightBackground': opacity(palette.orange, 0.1),
    'editor.hoverHighlightBackground': opacity(accent, 0.1),
    'editor.lineHighlightBackground': opacity(accent, 0.05),
    'editor.lineHighlightBorder': transparent,
    'editor.rangeHighlightBackground': opacity(accent, 0.1),
    'editorLink.activeForeground': palette.blue,
    'editorIndentGuide.background': palette.surface1,
    'editorIndentGuide.activeBackground': palette.surface2,
    'editorRuler.foreground': palette.surface2,
    'editorBracketMatch.background': opacity(accent, 0.2),
    'editorBracketMatch.border': accent,
    'editorWhitespace.foreground': palette.surface2,
    
    // Editor brackets
    'editorBracketHighlight.foreground1': bracketColors[0],
    'editorBracketHighlight.foreground2': bracketColors[1],
    'editorBracketHighlight.foreground3': bracketColors[2],
    'editorBracketHighlight.foreground4': bracketColors[3],
    'editorBracketHighlight.foreground5': bracketColors[4],
    'editorBracketHighlight.foreground6': bracketColors[5],
    'editorBracketHighlight.unexpectedBracket.foreground': palette.red,
    
    // Editor gutter
    'editorGutter.background': palette.base,
    'editorGutter.modifiedBackground': palette.yellow,
    'editorGutter.addedBackground': palette.green,
    'editorGutter.deletedBackground': palette.red,
    'editorGutter.commentRangeForeground': palette.overlay1,
    'editorGutter.foldingControlForeground': palette.overlay0,
    
    // Diff editor
    'diffEditor.insertedTextBackground': opacity(palette.green, 0.15),
    'diffEditor.removedTextBackground': opacity(palette.red, 0.15),
    'diffEditor.insertedLineBackground': opacity(palette.green, 0.1),
    'diffEditor.removedLineBackground': opacity(palette.red, 0.1),
    
    // Editor widget
    'editorWidget.background': palette.mantle,
    'editorWidget.foreground': palette.text,
    'editorWidget.border': palette.surface2,
    'editorWidget.resizeBorder': accent,
    'editorSuggestWidget.background': palette.mantle,
    'editorSuggestWidget.border': palette.surface2,
    'editorSuggestWidget.foreground': palette.text,
    'editorSuggestWidget.selectedBackground': opacity(accent, 0.2),
    'editorSuggestWidget.selectedForeground': palette.text,
    'editorSuggestWidget.highlightForeground': accent,
    'editorSuggestWidget.selectedIconForeground': accent,
    'editorSuggestWidget.focusHighlightForeground': accent,
    
    // Editor hover
    'editorHoverWidget.background': palette.mantle,
    'editorHoverWidget.foreground': palette.text,
    'editorHoverWidget.border': palette.surface2,
    'editorHoverWidget.statusBarBackground': palette.crust,
    
    // Error and warnings
    'editorError.foreground': palette.red,
    'editorWarning.foreground': palette.yellow,
    'editorInfo.foreground': palette.blue,
    'editorHint.foreground': palette.teal,
    
    // Debug
    'debugToolBar.background': palette.crust,
    'debugToolBar.border': border,
    'debugExceptionWidget.background': palette.crust,
    'debugExceptionWidget.border': palette.red,
    
    // Input
    'input.background': palette.mantle,
    'input.border': palette.surface2,
    'input.foreground': palette.text,
    'input.placeholderForeground': palette.overlay0,
    'inputOption.activeBackground': opacity(accent, 0.2),
    'inputOption.activeBorder': accent,
    'inputOption.activeForeground': palette.text,
    'inputOption.hoverBackground': opacity(accent, 0.1),
    'inputValidation.errorBackground': palette.mantle,
    'inputValidation.errorForeground': palette.text,
    'inputValidation.errorBorder': palette.red,
    'inputValidation.infoBackground': palette.mantle,
    'inputValidation.infoForeground': palette.text,
    'inputValidation.infoBorder': palette.blue,
    'inputValidation.warningBackground': palette.mantle,
    'inputValidation.warningForeground': palette.text,
    'inputValidation.warningBorder': palette.yellow,
    
    // List
    'list.activeSelectionBackground': opacity(accent, 0.2),
    'list.activeSelectionForeground': palette.text,
    'list.activeSelectionIconForeground': accent,
    'list.dropBackground': dropBackground,
    'list.focusBackground': opacity(accent, 0.15),
    'list.focusForeground': palette.text,
    'list.focusHighlightForeground': accent,
    'list.highlightForeground': accent,
    'list.hoverBackground': opacity(accent, 0.1),
    'list.hoverForeground': palette.text,
    'list.inactiveSelectionBackground': opacity(accent, 0.15),
    'list.inactiveSelectionForeground': palette.text,
    'list.inactiveSelectionIconForeground': accent,
    'list.invalidItemForeground': palette.red,
    'list.errorForeground': palette.red,
    'list.warningForeground': palette.yellow,
    
    // Menu
    'menu.background': palette.mantle,
    'menu.foreground': palette.text,
    'menu.selectionBackground': opacity(accent, 0.2),
    'menu.selectionForeground': palette.text,
    'menu.selectionBorder': transparent,
    'menu.separatorBackground': palette.surface2,
    'menubar.selectionBackground': opacity(accent, 0.2),
    'menubar.selectionForeground': palette.text,
    
    // Minimap
    'minimap.findMatchHighlight': palette.orange,
    'minimap.selectionHighlight': accent,
    'minimap.errorHighlight': palette.red,
    'minimap.warningHighlight': palette.yellow,
    'minimap.background': palette.base,
    'minimap.selectionOccurrenceHighlight': accent,
    'minimap.foregroundOpacity': '#000000aa',
    'minimapSlider.background': opacity(accent, 0.2),
    'minimapSlider.hoverBackground': opacity(accent, 0.3),
    'minimapSlider.activeBackground': opacity(accent, 0.4),
    'minimapGutter.addedBackground': palette.green,
    'minimapGutter.modifiedBackground': palette.yellow,
    'minimapGutter.deletedBackground': palette.red,
    
    // Notifications
    'notificationCenter.border': border,
    'notificationCenterHeader.foreground': palette.text,
    'notificationCenterHeader.background': palette.crust,
    'notificationToast.border': border,
    'notifications.foreground': palette.text,
    'notifications.background': palette.mantle,
    'notifications.border': border,
    'notificationLink.foreground': palette.blue,
    'notificationsErrorIcon.foreground': palette.red,
    'notificationsWarningIcon.foreground': palette.yellow,
    'notificationsInfoIcon.foreground': palette.blue,
    
    // Panel
    'panel.background': palette.mantle,
    'panel.border': border,
    'panel.dropBorder': dropBackground,
    'panelTitle.activeBorder': accent,
    'panelTitle.activeForeground': palette.text,
    'panelTitle.inactiveForeground': palette.overlay0,
    'panelInput.border': palette.surface2,
    'panelSection.border': palette.surface2,
    'panelSection.dropBackground': dropBackground,
    'panelSectionHeader.background': palette.crust,
    'panelSectionHeader.foreground': palette.text,
    
    // Peek view
    'peekView.border': accent,
    'peekViewEditor.background': palette.mantle,
    'peekViewEditorGutter.background': palette.mantle,
    'peekViewResult.background': palette.crust,
    'peekViewResult.fileForeground': palette.text,
    'peekViewResult.lineForeground': palette.subtext1,
    'peekViewResult.matchHighlightBackground': opacity(palette.orange, 0.3),
    'peekViewResult.selectionBackground': opacity(accent, 0.2),
    'peekViewResult.selectionForeground': palette.text,
    'peekViewTitle.background': palette.crust,
    'peekViewTitleDescription.foreground': palette.subtext1,
    'peekViewTitleLabel.foreground': palette.text,
    
    // Progress bar
    'progressBar.background': accent,
    
    // Scrollbar
    'scrollbar.shadow': opacity(palette.crust, 0.5),
    'scrollbarSlider.activeBackground': opacity(accent, 0.4),
    'scrollbarSlider.background': opacity(accent, 0.2),
    'scrollbarSlider.hoverBackground': opacity(accent, 0.3),
    
    // Settings
    'settings.headerForeground': palette.text,
    'settings.modifiedItemIndicator': accent,
    'settings.dropdownBackground': palette.mantle,
    'settings.dropdownForeground': palette.text,
    'settings.dropdownBorder': palette.surface2,
    'settings.dropdownListBorder': palette.surface2,
    'settings.textInputBackground': palette.mantle,
    'settings.textInputForeground': palette.text,
    'settings.textInputBorder': palette.surface2,
    'settings.numberInputBackground': palette.mantle,
    'settings.numberInputForeground': palette.text,
    'settings.numberInputBorder': palette.surface2,
    'settings.focusedRowBackground': opacity(accent, 0.1),
    'settings.focusedRowBorder': accent,
    'settings.rowHoverBackground': opacity(accent, 0.05),
    'settings.checkboxBackground': palette.mantle,
    'settings.checkboxForeground': palette.text,
    'settings.checkboxBorder': palette.surface2,
    
    // Sidebar
    'sideBar.background': palette.mantle,
    'sideBar.foreground': palette.text,
    'sideBar.border': border,
    'sideBar.dropBackground': dropBackground,
    'sideBarSectionHeader.background': palette.crust,
    'sideBarSectionHeader.foreground': palette.text,
    'sideBarSectionHeader.border': border,
    'sideBarTitle.foreground': palette.text,
    
    // Status bar
    'statusBar.background': palette.crail,
    'statusBar.foreground': isDark ? palette.text : palette.white,
    'statusBar.border': border,
    'statusBar.debuggingBackground': palette.orange,
    'statusBar.debuggingForeground': isDark ? palette.text : palette.white,
    'statusBar.debuggingBorder': border,
    'statusBar.noFolderForeground': isDark ? palette.text : palette.white,
    'statusBar.noFolderBackground': palette.purple,
    'statusBar.noFolderBorder': border,
    'statusBarItem.activeBackground': isDark ? opacity(palette.text, 0.2) : opacity(palette.white, 0.2),
    'statusBarItem.hoverBackground': isDark ? opacity(palette.text, 0.1) : opacity(palette.white, 0.1),
    'statusBarItem.prominentForeground': isDark ? palette.text : palette.white,
    'statusBarItem.prominentBackground': transparent,
    'statusBarItem.prominentHoverBackground': isDark ? opacity(palette.text, 0.1) : opacity(palette.white, 0.1),
    'statusBarItem.remoteBackground': palette.blue,
    'statusBarItem.remoteForeground': isDark ? palette.text : palette.white,
    'statusBarItem.errorBackground': palette.red,
    'statusBarItem.errorForeground': isDark ? palette.text : palette.white,
    'statusBarItem.warningBackground': palette.yellow,
    'statusBarItem.warningForeground': isDark ? palette.text : palette.crust,
    
    // Tab
    'tab.activeBackground': palette.base,
    'tab.activeForeground': palette.text,
    'tab.border': border,
    'tab.activeBorder': transparent,
    'tab.unfocusedActiveBorder': transparent,
    'tab.activeBorderTop': accent,
    'tab.unfocusedActiveBorderTop': opacity(accent, 0.5),
    'tab.lastPinnedBorder': palette.surface2,
    'tab.inactiveBackground': palette.mantle,
    'tab.inactiveForeground': palette.overlay0,
    'tab.unfocusedActiveForeground': palette.text,
    'tab.unfocusedInactiveForeground': palette.overlay0,
    'tab.hoverBackground': opacity(accent, 0.1),
    'tab.unfocusedHoverBackground': opacity(accent, 0.05),
    'tab.hoverForeground': palette.text,
    'tab.unfocusedHoverForeground': palette.text,
    'tab.activeModifiedBorder': palette.yellow,
    'tab.inactiveModifiedBorder': opacity(palette.yellow, 0.5),
    'tab.unfocusedActiveModifiedBorder': palette.yellow,
    'tab.unfocusedInactiveModifiedBorder': opacity(palette.yellow, 0.5),
    'editorGroupHeader.noTabsBackground': palette.mantle,
    'editorGroupHeader.tabsBackground': palette.mantle,
    'editorGroupHeader.tabsBorder': border,
    'editorGroupHeader.border': border,
    
    // Terminal
    'terminal.background': palette.base,
    'terminal.foreground': palette.text,
    'terminal.ansiBlack': ansiColors.normal.black,
    'terminal.ansiRed': ansiColors.normal.red,
    'terminal.ansiGreen': ansiColors.normal.green,
    'terminal.ansiYellow': ansiColors.normal.yellow,
    'terminal.ansiBlue': ansiColors.normal.blue,
    'terminal.ansiMagenta': ansiColors.normal.magenta,
    'terminal.ansiCyan': ansiColors.normal.cyan,
    'terminal.ansiWhite': ansiColors.normal.white,
    'terminal.ansiBrightBlack': ansiColors.bright.black,
    'terminal.ansiBrightRed': ansiColors.bright.red,
    'terminal.ansiBrightGreen': ansiColors.bright.green,
    'terminal.ansiBrightYellow': ansiColors.bright.yellow,
    'terminal.ansiBrightBlue': ansiColors.bright.blue,
    'terminal.ansiBrightMagenta': ansiColors.bright.magenta,
    'terminal.ansiBrightCyan': ansiColors.bright.cyan,
    'terminal.ansiBrightWhite': ansiColors.bright.white,
    'terminal.selectionBackground': opacity(accent, 0.3),
    'terminal.findMatchBackground': opacity(palette.orange, 0.3),
    'terminal.findMatchHighlightBackground': opacity(palette.orange, 0.15),
    'terminalCursor.background': palette.base,
    'terminalCursor.foreground': accent,
    
    // Title bar
    'titleBar.activeBackground': palette.crust,
    'titleBar.activeForeground': palette.text,
    'titleBar.inactiveBackground': palette.crust,
    'titleBar.inactiveForeground': palette.overlay0,
    'titleBar.border': border,
    
    // Tree
    'tree.indentGuidesStroke': palette.surface2,
    'tree.tableColumnsBorder': palette.surface2,
    'tree.tableOddRowsBackground': opacity(palette.surface0, 0.3),
    
    // Welcome page
    'welcomePage.background': palette.base,
    'welcomePage.progress.background': palette.mantle,
    'welcomePage.progress.foreground': accent,
    'welcomePage.tileBackground': palette.mantle,
    'welcomePage.tileHoverBackground': opacity(accent, 0.1),
    'welcomePage.tileBorder': palette.surface2,
    'walkThrough.embeddedEditorBackground': palette.mantle,
    
    // Git colors - optimized for visibility in both light and dark themes
    'gitDecoration.addedResourceForeground': isDark ? '#7BD88F' : '#22C55E',
    'gitDecoration.modifiedResourceForeground': isDark ? '#FCD34D' : '#EAB308',
    'gitDecoration.deletedResourceForeground': isDark ? '#F87171' : '#DC2626',
    'gitDecoration.renamedResourceForeground': isDark ? '#60A5FA' : '#2563EB',
    'gitDecoration.stageModifiedResourceForeground': isDark ? '#FDE047' : '#FACC15',
    'gitDecoration.stageDeletedResourceForeground': isDark ? '#FCA5A5' : '#F87171',
    'gitDecoration.untrackedResourceForeground': isDark ? '#4DD4E8' : '#0891B2',
    'gitDecoration.ignoredResourceForeground': isDark ? '#9CA3AF' : '#6B7280',
    'gitDecoration.conflictingResourceForeground': isDark ? '#FB923C' : '#EA580C',
    'gitDecoration.submoduleResourceForeground': isDark ? '#C084FC' : '#9333EA',
  };
}