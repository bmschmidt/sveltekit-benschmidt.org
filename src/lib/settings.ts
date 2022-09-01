import yaml from 'js-yaml';
import config from '$lib/../_config.yml?raw';

const settings = yaml.load(config);

export default settings;
