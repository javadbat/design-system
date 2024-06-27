import React from 'react';
import 'jb-searchbar';
type JBSearchbarWebComponent = any;
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'jb-searchbar': JBSearchbarType;
        }
        interface JBSearchbarType extends React.DetailedHTMLProps<React.HTMLAttributes<JBSearchbarWebComponent>, JBSearchbarWebComponent> {
            "class"?: string;
            "type"?: string;
            "placeholder"?: string;
        }
    }
}
export declare function JBSearchbar(props: Props): React.JSX.Element;
type Props = {
    placeholder: string;
    searchOnChange: boolean;
    onSearch: () => any;
    columnList: any[];
};
export {};
