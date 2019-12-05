import React from 'react';

function App() {
  return (
    <React.StrictMode>
      <div
        className="App"
        style={{
          width: '100%',
          height: '100vh'
        }}
      >
        <iframe
          width="100%"
          height="100%"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          title="Let's party"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/2173404&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"
        ></iframe>
      </div>
    </React.StrictMode>
  );
}

export default App;
