import { Tooltip } from 'antd';
import styles from './index.css';
import * as React from 'react';

const { useState, useEffect } = React;
interface IProps {
    value: string | number | boolean;
    style?: any; // React.cssProperties;
    maxWidth?: number;
}

const Ellipis: React.FunctionComponent<IProps> = ({ value, style, maxWidth }) => {
    const textNode = React.createRef<HTMLDivElement>();
    const [overflow, setOverflow] = useState(false);
    useEffect(() => {
        const node = textNode.current;
        if (node) {
            const { clientWidth, scrollWidth } = node;
            if(clientWidth < scrollWidth) {
                setOverflow(true);
            }
        }
    }, []);
    const text = (
        <div className = {styles.box} ref = { textNode }
            style = {{ ...style, maxWidth}}>
            {value}
        </div>
    )
    return overflow ? <Tooltip title={value}>{text}</Tooltip> : text;
}

export default Ellipis;
