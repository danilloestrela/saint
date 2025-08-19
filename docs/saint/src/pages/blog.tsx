import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Blog(): JSX.Element {
  return (
    <Layout
      title="Blog - Coming Soon"
      description="Saint blog is coming soon! Stay tuned for updates, tutorials, and community content.">
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset--2">
            <div className="text--center">
              <h1>📝 Blog - Coming Soon!</h1>
              <p className="text--lg">
                We're working on something exciting! The Saint blog will feature:
              </p>
              
              <div className="row margin-vert--lg">
                <div className="col col--4">
                  <div className="card">
                    <div className="card__header">
                      <h3>🚀 Tutorials</h3>
                    </div>
                    <div className="card__body">
                      <p>Step-by-step guides for common development workflows</p>
                    </div>
                  </div>
                </div>
                
                <div className="col col--4">
                  <div className="card">
                    <div className="card__header">
                      <h3>💡 Tips & Tricks</h3>
                    </div>
                    <div className="card__body">
                      <p>Advanced usage patterns and optimization techniques</p>
                    </div>
                  </div>
                </div>
                
                <div className="col col--4">
                  <div className="card">
                    <div className="card__header">
                      <h3>🆕 Updates</h3>
                    </div>
                    <div className="card__body">
                      <p>Latest features, improvements, and release notes</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="margin-vert--lg">
                <p className="text--lg">
                  In the meantime, check out our documentation to get started with Saint!
                </p>
                <div className="margin-vert--md">
                  <Link
                    className="button button--primary button--lg"
                    to="/docs/intro">
                    Get Started 🚀
                  </Link>
                </div>
              </div>
              
              <div className="text--center margin-vert--lg">
                <p>
                  Want to contribute? Check out our{' '}
                  <Link to="/docs/developer-guide">Developer Guide</Link> or{' '}
                  <a href="https://github.com/danilloestrela/saint">GitHub repository</a>!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
