import { createLocalVue, shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

import LoadMoreButton from '@/components/LoadMoreButton.vue';
import Vuex from 'vuex'
const localVue = createLocalVue()
localVue.use(Vuex)


describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});


describe('LoadMoreButton.vue', () => {
	let store:any;

	beforeEach(() => {
    store = new Vuex.Store({
      state: {
				movies: {
					displayedMovies: 3,
				},
			},
			mutations: {
				setDisplayedMovies(state) {
					state.movies.displayedMovies += state.movies.displayedMovies;
				},
			},
			actions: {
				showMore({ commit }) {
					commit('setDisplayedMovies');
				},
			}
    })
	})

  it('Call method to increase number of displayed pages to 6', () => {
		const wrapper:any = shallowMount(LoadMoreButton, {
			localVue,
			store
		});

		wrapper.vm.showMorePages();
		expect(store.state.movies.displayedMovies).toEqual(6);
  });
});