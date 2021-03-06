// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import IdcardOutlinedSvg from '@ant-design/icons-svg/lib/asn/IdcardOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const IdcardOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={IdcardOutlinedSvg}></AntdIcon>;
};

IdcardOutlined.displayName = 'IdcardOutlined';
IdcardOutlined.inheritAttrs = false;
export default IdcardOutlined;