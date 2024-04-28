// URL: https://observablehq.com/@bmschmidt/transitioning-between-circle-packs-historical-us-electio
// Title: Transitioning between circle packs: Historical US elections
// Author: Benjamin Schmidt (@bmschmidt)
// Version: 463
// Runtime version: 1

const m0 = {
	id: '625093d4a3f9afa2@463',
	variables: [
		{
			inputs: ['md'],
			value: function (md) {
				return md`
# Transitioning between circle packs: Historical US elections

Circle packs are often used to illustrate different states of the same fundamental elements with transitions between states. It can be slightly tricky to center the different groups and to keep the positions steady between transitions. The data here is a tidy-format one per row, so I use d3-group to create stable entities for each state that are updated according to the chosen year. Otherwise, the circles won't remember their location from plot to plot.

The data here are the popular-vote results for all 50 US states by party, derived from Dave Leip's election atlas.

Radio to see the distribution of states by year. 1912, 1860, and 1948 are major three- and four-party elections.
				`;
			}
		},
		{
			name: 'svg',
			inputs: ['DOM', 'width', 'height'],
			value: function (DOM, width, height) {
				return DOM.svg(width, height);
			}
		},
		{
			name: 'viewof year',
			inputs: ['radio', 'd3'],
			value: function (radio, d3) {
				return radio({
					title: 'Year',
					options: d3.range(1824, 2020, 4).map((d) => '' + d),
					value: '2016'
				});
			}
		},
		{
			name: 'year',
			inputs: ['Generators', 'viewof year'],
			value: (G, _) => G.input(_)
		},
		{
			name: 'viewof side',
			inputs: ['select'],
			value: function (select) {
				return select({
					title: 'Set position based on',
					options: [
						{ label: 'Winning party', value: 'winner_party' },
						{ label: 'If state leans more to party than national vote', value: 'party_lean' }
					]
				});
			}
		},
		{
			name: 'side',
			inputs: ['Generators', 'viewof side'],
			value: (G, _) => G.input(_)
		},
		{
			name: 'viewof size_variable',
			inputs: ['select'],
			value: function (select) {
				return select({ title: 'Size based on', options: ['total_votes', 'margin'] });
			}
		},
		{
			name: 'size_variable',
			inputs: ['Generators', 'viewof size_variable'],
			value: (G, _) => G.input(_)
		},
		{
			name: 'forceBreakout',
			inputs: ['height'],
			value: function (height) {
				return function forceBreakout(xaccessor, yaccessor = (d) => height / 2, strength = 0.1) {
					// adapted from https://observablehq.com/@d3/clustered-bubbles
					let nodes;
					function force(alpha) {
						const l = alpha * strength;
						for (const d of nodes) {
							const x = xaccessor(d);
							const y = yaccessor(d);
							d.vx -= (d.x - x) * l;
							d.vy -= (d.y - y) * l;
						}
					}
					force.initialize = (_) => (nodes = _);

					return force;
				};
			}
		},
		{
			name: 'update',
			inputs: [
				'grouped2',
				'year',
				'd3',
				'svg',
				'size_variable',
				'width',
				'height',
				'side',
				'forceBreakout',
				'invalidation'
			],
			value: function (
				grouped2,
				year,
				d3,
				svg,
				size_variable,
				width,
				height,
				side,
				forceBreakout,
				invalidation
			) {
				return function update() {
					// The local data is done on top of a nested set so that the assigned x and y values
					// persist by state.
					let local = grouped2
						.map((d) => {
							const datum = d.data.filter((e) => e.year == year);
							if (datum.length) {
								Object.assign(d, datum[0]);
							}
							return d;
						})
						.filter((d) => d.year == year); // Might be left over from a previous run.

					let circles = d3
						.select(svg)
						.selectAll('g')
						.data(local, (d) => d.State);

					const size = d3
						.scaleSqrt()
						.domain(d3.extent(local.map((d) => +d[size_variable])))
						.range([0, width / 20]);

					circles = circles.join(
						(enter) => {
							const g = enter
								.append('g')
								.attr('transform', `translate(${width / 2}, ${height / 2})`);
							g.append('circle').attr('cx', 0).attr('cy', 0).attr('stroke', 'black');

							g.append('text')
								.text((d) => d.Abbreviation)
								.attr('dominant-baseline', 'middle')
								.attr('font-style', 'sans-serif')
								.attr('text-anchor', 'middle');
							return g;
						},
						(update) => update,
						(exit) =>
							exit
								.call((exit) => {
									exit.selectAll('circle').transition().duration(2000).attr('r', 0);
									exit.selectAll('text').transition().duration(2000).attr('font-size', 0);
								})
								.transition()
								.delay(2000)
								.remove()
					);

					const colormap = d3
						.scaleOrdinal()
						.domain(['Republican', 'Democratic', 'Whig/Other'])
						.range(['#BC4830', '#85C1E9', 'orange', 'orange', 'orange', 'orange']);

					circles
						.selectAll('circle')
						.attr('r', (d) => size(+d[size_variable]))
						.style('fill', (d) => colormap(d[side]));

					circles.selectAll('text').text((d) => d.Abbreviation);

					// Categorical mapping
					const xmap = d3.scalePoint().range([0, width]).padding(0.5);
					const x_values = Array.from(new Set(local.map((d) => d[side])));
					x_values.sort();
					xmap.domain(x_values);

					// Labels
					const candidates = d3.group(local, (d) => d[side]);

					d3.select(svg).selectAll('g.label').remove(); // God knows
					let labels = d3
						.select(svg)
						.selectAll('g.label')
						.data(
							x_values.map((d) => [d, candidates.get(d)[0].winner_name]),
							(d) => d[0]
						);

					labels = labels
						.join(
							(enter) => {
								const e = enter.append('g').attr('class', 'label');
								e.append('text');
								e.append('text').attr('transform', 'translate(0, 25)');
								return e;
							},
							(update) => update.remove(),
							(exit) => exit.remove()
						)
						.attr('transform', (d) => `translate(${xmap(d[0])}, 22)`)
						.selectAll('text')
						.style('font-size', 24)
						.attr('text-anchor', 'middle')
						.attr('fill', (d) => colormap(d[0]))
						.text((d, i) => {
							return d[i];
						});

					// Done with labels.

					const simulation = d3
						.forceSimulation(local)
						.force(
							'breakout',
							forceBreakout(
								(datum) => xmap(datum[side]), // x accessor
								(datum) => height / 2
							), // y accessor
							0.02 // Strength
						)
						.force(
							'collide',
							d3.forceCollide((d) => d3.max([size(d[size_variable]), 15]))
						);

					simulation.on('tick', () => {
						circles.attr('transform', (d) => `translate(${d.x}, ${d.y})`);
					});

					invalidation.then(() => simulation.stop());
				};
			}
		},
		{
			inputs: ['svg', 'grouped2', 'update'],
			value: function (svg, grouped2, update) {
				svg;
				grouped2;
				update();
			}
		},
		{
			name: 'color',
			value: function () {
				return 'party';
			}
		},
		{
			name: 'width',
			value: function () {
				return 840;
			}
		},
		{
			name: 'height',
			inputs: ['width'],
			value: function (width) {
				return (width * 1) / 2;
			}
		},
		{
			name: 'grouped2',
			inputs: ['data', 'd3'],
			value: function (data, d3) {
				const cleaned = data;
				data.forEach((d) => {
					d.total_votes = +d.total_votes;
					d.margin = +d.winner_votes - (d.total_votes - d.winner_votes);
					d;
				});
				return Array.from(
					d3
						.rollup(
							cleaned,
							(d) => {
								return { State: d[0].State, data: d };
							},
							(d) => d.State
						)
						.values()
				);
			}
		},
		{
			name: 'data',
			inputs: ['d3'],
			value: function (d3) {
				return d3.csv('//benschmidt.org/notebooks/prez_results.csv');
			}
		},
		{
			inputs: ['data'],
			value: function (data) {
				return data[0];
			}
		},
		{
			from: '@jashkenas/inputs',
			name: 'radio',
			remote: 'radio'
		},
		{
			from: '@jashkenas/inputs',
			name: 'select',
			remote: 'select'
		},
		{
			from: '@jashkenas/inputs',
			name: 'slider',
			remote: 'slider'
		},
		{
			name: 'd3',
			inputs: ['require'],
			value: function (require) {
				return require('d3@6');
			}
		}
	]
};

const m1 = {
	id: '@jashkenas/inputs',
	variables: [
		{
			name: 'radio',
			inputs: ['input', 'html'],
			value: function (input, html) {
				return function radio(config = {}) {
					let {
						value: formValue,
						title,
						description,
						submit,
						options,
						disabled
					} = Array.isArray(config) ? { options: config } : config;
					options = options.map((o) => (typeof o === 'string' ? { value: o, label: o } : o));
					const form = input({
						type: 'radio',
						title,
						description,
						submit,
						getValue: (input) => {
							if (input.checked) return input.value;
							const checked = Array.prototype.find.call(input, (radio) => radio.checked);
							return checked ? checked.value : undefined;
						},
						form: html`
							<form>
								${options.map(({ value, label }, i) => {
									const input = html`<input
										type="radio"
										name="input"
										${value === formValue ? 'checked' : ''}
										style="vertical-align: top; ${i === 0 ? `margin-left: 1px;` : ``}"
									/>`;
									input.setAttribute('value', value);
									if (disabled) input.setAttribute('value', disabled);
									const tag = html` <label
										style="display: inline-block; margin: 5px 10px 3px 0; font-size: 0.85em;"
									>
										${input} ${label}
									</label>`;
									return tag;
								})}
							</form>
						`
					});
					form.output.remove();
					return form;
				};
			}
		},
		{
			name: 'select',
			inputs: ['input', 'html'],
			value: function (input, html) {
				return function select(config = {}) {
					let {
						value: formValue,
						title,
						description,
						disabled,
						submit,
						multiple,
						size,
						options
					} = Array.isArray(config) ? { options: config } : config;
					options = options.map((o) => (typeof o === 'object' ? o : { value: o, label: o }));
					const form = input({
						type: 'select',
						title,
						description,
						submit,
						attributes: { disabled },
						getValue: (input) => {
							const selected = Array.prototype.filter
								.call(input.options, (i) => i.selected)
								.map((i) => i.value);
							return multiple ? selected : selected[0];
						},
						form: html`
							<form>
								<select name="input" ${multiple ? `multiple size="${size || options.length}"` : ''}>
									${options.map(({ value, label, disabled }) =>
										Object.assign(html`<option></option>`, {
											value,
											selected: Array.isArray(formValue)
												? formValue.includes(value)
												: formValue === value,
											disabled: disabled ? disabled : false,
											textContent: label
										})
									)}
								</select>
							</form>
						`
					});
					form.output.remove();
					return form;
				};
			}
		},
		{
			name: 'slider',
			inputs: ['input'],
			value: function (input) {
				return function slider(config = {}) {
					let {
						min = 0,
						max = 1,
						value = (max + min) / 2,
						step = 'any',
						precision = 2,
						title,
						description,
						disabled,
						getValue,
						format,
						display,
						submit
					} = typeof config === 'number' ? { value: config } : config;
					precision = Math.pow(10, precision);
					if (!getValue)
						getValue = (input) => Math.round(input.valueAsNumber * precision) / precision;
					return input({
						type: 'range',
						title,
						description,
						submit,
						format,
						display,
						attributes: { min, max, step, disabled, value },
						getValue
					});
				};
			}
		},
		{
			name: 'input',
			inputs: ['html', 'd3format'],
			value: function (html, d3format) {
				return function input(config) {
					let {
						form,
						type = 'text',
						attributes = {},
						action,
						getValue,
						title,
						description,
						format,
						display,
						submit,
						options
					} = config;
					const wrapper = html`<div></div>`;
					if (!form)
						form = html`<form>
							<input name="input" type=${type} />
						</form>`;
					Object.keys(attributes).forEach((key) => {
						const val = attributes[key];
						if (val != null) form.input.setAttribute(key, val);
					});
					if (submit)
						form.append(
							html`<input
								name="submit"
								type="submit"
								style="margin: 0 0.75em"
								value="${typeof submit == 'string' ? submit : 'Submit'}"
							/>`
						);
					form.append(
						html`<output
							name="output"
							style="font: 14px Menlo, Consolas, monospace; margin-left: 0.5em;"
						></output>`
					);
					if (title)
						form.prepend(
							html`<div style="font: 700 0.9rem sans-serif; margin-bottom: 3px;">${title}</div>`
						);
					if (description)
						form.append(
							html`<div style="font-size: 0.85rem; font-style: italic; margin-top: 3px;">
								${description}
							</div>`
						);
					if (format) format = typeof format === 'function' ? format : d3format.format(format);
					if (action) {
						action(form);
					} else {
						const verb = submit
							? 'onsubmit'
							: type == 'button'
							? 'onclick'
							: type == 'checkbox' || type == 'radio'
							? 'onchange'
							: 'oninput';
						form[verb] = (e) => {
							e && e.preventDefault();
							const value = getValue ? getValue(form.input) : form.input.value;
							if (form.output) {
								const out = display ? display(value) : format ? format(value) : value;
								if (out instanceof window.Element) {
									while (form.output.hasChildNodes()) {
										form.output.removeChild(form.output.lastChild);
									}
									form.output.append(out);
								} else {
									form.output.value = out;
								}
							}
							form.value = value;
							if (verb !== 'oninput')
								form.dispatchEvent(new CustomEvent('input', { bubbles: true }));
						};
						if (verb !== 'oninput')
							wrapper.oninput = (e) => e && e.stopPropagation() && e.preventDefault();
						if (verb !== 'onsubmit') form.onsubmit = (e) => e && e.preventDefault();
						form[verb]();
					}
					while (form.childNodes.length) {
						wrapper.appendChild(form.childNodes[0]);
					}
					form.append(wrapper);
					return form;
				};
			}
		},
		{
			name: 'd3format',
			inputs: ['require'],
			value: function (require) {
				return require('d3-format@1');
			}
		}
	]
};

const notebook = {
	id: '625093d4a3f9afa2@463',
	modules: [m0, m1]
};

export default notebook;
