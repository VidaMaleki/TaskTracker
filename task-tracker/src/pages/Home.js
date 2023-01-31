import React from 'react';
import './Home.css'


function Home() {
    return(
    <div class="home-background">
        <div class="right-pic-container"><div class="right-pic"></div></div>
        <div class="pic-container">
            <div class="tracker-main-pic">
                <div class="pic-header">
                    <h2>Task Tracker</h2>
                </div>
            </div>
        </div>
        <div class="left-pic-container"><div class="left-pic"></div></div>
    </div>
    );
}
export default Home;