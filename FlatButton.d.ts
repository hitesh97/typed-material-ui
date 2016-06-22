import * as React from 'react';
import {SharedEnhancedButtonProps} from "./internal/EnhancedButton";

export interface FlatButtonProps extends SharedEnhancedButtonProps {
  // <EnhancedButton/> is the element that get the 'other' properties
  backgroundColor?: string;
  disabled?: boolean;
  hoverColor?: string;
  href?: string;
  icon?: React.ReactNode;
  label?: string;
  labelPosition?: string; // oneOf(['left', 'right'])
  labelStyle?: React.CSSProperties;
  linkButton?: boolean;
  onKeyboardFocus?: (e: React.FocusEvent, isKeyboardFocused: boolean) => void;
  onMouseEnter?: React.MouseEventHandler;
  onMouseLeave?: React.MouseEventHandler;
  onTouchStart?: React.TouchEventHandler;
  primary?: boolean;
  rippleColor?: string;
  secondary?: boolean;
  style?: React.CSSProperties;
}

export default class FlatButton extends React.Component<FlatButtonProps, {}> {
}
