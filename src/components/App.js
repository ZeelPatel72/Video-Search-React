import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../Apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

class App extends React.Component {
	state = { videos: [], selectedvideo: null }

	componentDidMount() {
		this.onTermSubmit('Trending Songs')
	}

	onTermSubmit = async (term) => {
		const response = await youtube.get('/search', { params: { q: term } })

		this.setState({
			videos: response.data.items,
			selectedvideo: response.data.items[0],
		})
	}
	onVideoSelect = (video) => {
		this.setState({ selectedvideo: video })
	}

	render() {
		return (
			<div className="ui container" style={{ marginTop: `10px` }}>
				<SearchBar onFormSubmit={this.onTermSubmit} />
				<div className="ui segment">
					<div className="ui grid">
						<div className="ui row">
							<div className="eleven wide column">
								<VideoDetail video={this.state.selectedvideo} />
							</div>
							<div className="five wide column">
								<VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default App
