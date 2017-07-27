import React from 'react';

import clone from './img/clone.png';
import fork from './img/fork.png';
import pr from './img/pr.png';
import usingFork from './img/using-fork.png';

import DocsPage from '../index';

export default class GetStarted extends DocsPage {
  renderTitle() {
    return 'How do I get started?';
  }

  renderContent() {
    return (
      <div>
        <p>Now that you&apos;ve been convinced to start contributing to open-source <em>(right?!)</em>, let&apos;s get you started:</p>
        <h3>Finding a project</h3>
        <p>A brief list of things to look for in prospective projects:</p>
        <ul>
          <li><strong>Is it open-source?</strong> &ndash; check for a <code>LICENSE</code> file.</li>
          <li><strong>Does it accept contributions?</strong> &ndash; how many open issues are there? Are new issues triaged? How often are issues closed? Pull requests: how many are there, how recent are they?</li>
          <li><strong>Is the community welcoming</strong> &ndash; do maintainers respond helpfully to issues and pull requests? Are pull requests reviewed? Is the community friendly in communication forums? Is there a code of conduct? Is there a contribution guide?</li>
          <li><strong>Are you passionate about the project?</strong> &ndash; just as with a job, you&apos;ll be happier and more likely to continue contributing and build relationships if you&apos;re passionate about the project.</li>
        </ul>
        <h3>Reporting issues</h3>
        <p>You can open issues to report errors, discuss high-level topics, or propose new features or products.</p>
        <ul>
          <li><strong>Do your homework</strong> &ndash; search for other related content. Is there an FAQ that might answer the question? Has this issue been reported before?</li>
          <li><strong>But ask questions</strong> &ndash; be proactive about asking questions. Is this something that needs fixed? Is it on the project&apos;s roadmap? Suggested workarounds?</li>
          <li><strong>Prevent duplicate work</strong> &ndash; if you want to work on a bug, say so in the comments. Ask for the issue to be assigned to you by maintainers.</li>
          <li><strong>Follow-up</strong> &ndash; close issues when appropriate: if fixed, or if you find the answer elsewhere. Include context: why you closed the issue, or links to commits or techniques that fixed it. Issues often show up in Google searches; try to be kind to others who find it in the future.</li>
          <li><strong>Be respectful</strong> &ndash; open source is the result of a great deal of kindness, and maintainers are very generous with their time. Be respectful of that and thankful for their effort.</li>
        </ul>
        <h3>Contributing code</h3>
        <p>When you&apos;re ready to begin contributing, it&apos;s very easy to get started. Screenshots will use GitHub, but similar open-source hosting tools have analagous functionality.</p>
        <p>Since you likely do not have commit rights to the repository, you will need to operate in a fork.</p>
        <figure>
          <a href={fork}><img src={fork} /></a>
          <figcaption>Forking a repository is a one-click process.</figcaption>
        </figure>
        <figure>
          <a href={usingFork}><img src={usingFork} /></a>
          <figcaption>Note that I&apos;m now operating on <code>chuckharmston/testpilot</code>, rather than <code>mozilla/testpilot</code>.</figcaption>
        </figure>
        <p>Then to get a local copy of the repository, you clone your fork.</p>
        <figure>
          <a href={clone}><img src={clone} /></a>
          <figcaption>Instructions for several ways to clone your fork.</figcaption>
        </figure>
        <p>To make changes, I recommend using a branch:</p>
        <ul>
          <li>It isolates your changes.</li>
          <li>The master branch is left as a reference.</li>
          <li>You can use tools like <code>git diff</code>.</li>
        </ul>
        <p>As a bonus, when you push a branch to a fork:</p>
        <figure>
          <a href={pr}><img src={pr} /></a>
          <figcaption>GitHub shows UI to compare your branch to the remote master and create a pull request.</figcaption>
        </figure>
        <p>When composing changes, take care to follow established conventions. You may dogmatically believe in tabs, but if you&apos;re working on a project that uses spaces, follow that convention. This applies to code comments as well: write docstrings and module strings as appropriate, explaining the &ldquo;why&rdquo; as well as the &ldquo;what&rdquo;. Ensure that you also write any appropriate tests and documentation, making sure that builds pass. It&apos;s acceptable to submit partial pull requests (appropriately marked as a <code>WIP</code>) if you have any specific questions best asked with the context of the code.</p>
        <p>Ensure that you provide thorough context for your changes: write good commit messages, and discuss high-level decisions that you made. If there were interface changes involved, before/after screenshots are very helpful. After opening a pull request, you can comment on specific lines of code, if that context is helpful.</p>
        <p>Maintainers may review your code before merging. There may even be several cycles of review. That&apos;s great! This is how the open-source community ensures quality. When adding changes to new commits, do not squash them unless asked. This helps reviewers see what has been changed during each review cycle, and the commits may be squashed at merge time.</p>
        <h3>And then?</h3>
        <p>You wait. Remember to be respectful of maintainers&apos; time. People have jobs, take vacations, etc. Some possible outcomes of your pull request:</p>
        <ul>
          <li><strong>No response</strong> &ndash; sometimes, even on active projects, pull requests can go unacknowledged. Don&apos;t be discouraged! It happens to everyone. After a week passes, it&apos;s fair to <code>@mention</code> a maintainer to request attention.</li>
          <li><strong>Changes are requested</strong> &ndash; be responsive! If you don&apos;t have time to work on it further, say so. Others might take it over.</li>
          <li><strong>Your contribution isn&apos;t accepted</strong> &ndash; unfortunately, this sometimes happens. It is reasonable to ask why, but make sure to respect the maintainers&apos; decision and thank them for their effort. You&apos;re always able to fork the project to hold your changes.</li>
          <li><strong>Your contribution is accepted</strong> &ndash; huzzah! You&apos;re now an open-source contributor.</li>
        </ul>
      </div>
    );
  }
}
