import React from 'react';
import Ellipis from '../../../component/Ellipis';
import styles from './index.css';
import { Table } from 'antd';
// import ReactMarkdown from '../../../../node_modules/react-md';
import Md from "./index.md";
import Title from '../../../component/Title';

const exampleStyle = {
  color: '#fff',
  fontSize: 20,
};
const exampleValue = '青笺画卿颜,鸢语慕君年';
const data = [
  {
    key: '1',
    params: 'value',
    desc: '需省略的文本',
    type: 'string | number | boolean',
    mustIn: '是',
    defaultVal: '-',
  },
  {
    key: '2',
    params: 'style',
    desc: '文本样式',
    type: 'React.cssProperties',
    mustIn: '否',
    defaultVal: '-',
  },
  {
    key: '3',
    params: 'maxWidth',
    desc: '文本可展示最大宽度',
    mustIn: '是',
    type: 'number',
    defaultVal: '-',
  },
];

const columns = [
  {
    title: '参数',
    dataIndex: 'params',
    key: 'params',
  },
  {
    title: '说明',
    dataIndex: 'desc',
    key: 'des',
  },
  {
    title: '类型',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: '是否必传',
    dataIndex: 'mustIn',
    key: 'mustIn',
  },
  {
    title: '默认值',
    dataIndex: 'defaultVal',
    key: 'defaultVal',
  },
];

export default function() {
  return (
    <div className={styles.ellipisContainer}>
      <Title level={2} text={'省略号'} />
      <div className={styles.content}>文本超出省略，鼠标悬浮显示完整文本</div>
      {/* <div>省略</div> */}
      <Title level={2} text={'已省略'} />
      <div className={styles.playground}>
        <Ellipis value={exampleValue} maxWidth={100} style={exampleStyle} />
      </div>
      <Title level={2} text={'未省略'} />
      <div className={styles.playground}>
        <Ellipis value={exampleValue} maxWidth={400} style={exampleStyle} />
      </div>
      <div>
        {/* <Title level={2} text={'API'} />

        <div className={styles.content}>
          <Ellipis value="青笺画卿颜,鸢语慕君年" maxWidth={120} />
        </div> */}
        <Title level={2} text={'Ellipis API'} />
        <div style={{ padding: '20px' }}>
          <Table dataSource={data} columns={columns} pagination={false} />
        </div>
        {/* <ReactMarkdown
        source={Md}
            escapeHtml={false}
            renderers={{
              code: codeBlock,
            }}
            /> */}
      </div>
    </div>
  );
}
