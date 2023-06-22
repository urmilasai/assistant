import type { UploadProps } from 'antd';
import { Upload } from 'antd';
import React from 'react';

const props: UploadProps = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange({ file, fileList }) {
        if (file.status !== 'uploading') {
            console.log(file, fileList);
        }
    },
    defaultFileList: [
        {
            uid: '1',
            name: 'xxx.png',
            status: 'uploading',
            url: 'http://www.baidu.com/xxx.png',
            percent: 33,
            response: 'Uploading...'
        },
        // {
        //     uid: '2',
        //     name: 'yyy.png',
        //     status: 'done',
        //     url: 'http://www.baidu.com/yyy.png',
        // },
        // {
        //     uid: '3',
        //     name: 'zzz.png',
        //     status: 'error',
        //     response: 'Server Error 500', // custom error message to show
        //     url: 'http://www.baidu.com/zzz.png',
        // },
    ],
};

const SharedUpload: React.FC = () => (
    <Upload {...props}>
        {/* <Button icon={<UploadOutlined />}>Upload</Button> */}
    </Upload>
);

export default SharedUpload;