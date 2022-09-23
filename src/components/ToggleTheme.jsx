import ThemeProps from './ThemeProps';
import { applyTheme } from '../theme/utils';
import baseTheme from '../theme/base';
import darkTheme from '../theme/dark';
import lightTheme from '../theme/light';

function ToggleTheme() {
  return (
    <div className="flex justify-between">
      {/* Toggle base */}
      <div
        onClick={() => applyTheme(baseTheme)}
        className="w-5 h-5 mr-2 rounded-full bg-[#005963] border-2 border-[#00ffd0] hover:scale-110 hover:shadow-lg transition duration-150 cursor-pointer"
      ></div>
      {/* Toggle dark */}
      <div
        onClick={() => applyTheme(darkTheme)}
        className="w-5 h-5 mr-2 rounded-full bg-[#333] border-2 border-[#fff] hover:scale-110 hover:shadow-lg transition duration-150 cursor-pointer"
      ></div>
      {/* Toggle light */}
      <div
        onClick={() => applyTheme(lightTheme)}
        className="w-5 h-5 mr-2 rounded-full bg-[#fff] border-2 border-[#333] hover:scale-110 hover:shadow-lg transition duration-150 cursor-pointer"
      ></div>
    </div>
  );
}

ToggleTheme.propTypes = {
  ...ThemeProps,
};

ToggleTheme.defaultProps = {
  color: 'accent',
};

export default ToggleTheme;
