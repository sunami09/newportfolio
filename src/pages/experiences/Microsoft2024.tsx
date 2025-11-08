import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Microsoft2024.css';

const Microsoft2024: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="experience-detail-page">
      <button className="back-button" onClick={() => navigate('/experience')}>
        ← Back to Experience
      </button>

      <div className="experience-detail-content">
        <h1 className="company-name">Microsoft Designer</h1>
        <h2 className="role-title">Software Engineer Intern</h2>
        <p className="date-range">May 2024 - Aug 2024</p>
        
        <div className="subsection">
          <h3 className="subsection-title">Summary:</h3>
          <ul className="summary-list">
            <li>
              Developed 'Generative Object Move' for Microsoft Designer serving <strong>10 million+ users</strong>, 
              enabling AI-powered object repositioning with intelligent background reconstruction by integrating 
              <strong> SAM (Segment Anything Model)</strong> and <strong>DALL-E 3 APIs</strong>.
            </li>
            <li>
              Built a multi-stage image processing pipeline using <strong>TypeScript</strong> and <strong>React</strong>{' '}
              that orchestrates segmentation, inpainting, and generative fill workflows, creating seamless user 
              experiences for complex image manipulation.
            </li>
            <li>
              Implemented comprehensive <strong>telemetry and error logging systems</strong> that improved feature 
              reliability, tracked user interaction patterns, and enabled data-driven performance optimizations 
              for production deployment.
            </li>
          </ul>
        </div>

        <div className="subsection">
          <h3 className="subsection-title">Context:</h3>
          <p className="experience-text">
            Microsoft Designer needed to democratize professional-level image editing for its users, most of 
            whom lacked expertise in tools like Photoshop. A core pain point was object repositioning—users 
            wanted to move objects within images (e.g., moving a person from the left side to the center), but 
            this seemingly simple task required complex manual workflows:
          </p>
          <ul className="context-list">
            <li><strong>Precise selection</strong> of the object to move (difficult for users unfamiliar with selection tools)</li>
            <li><strong>Clean removal</strong> of the object from its original location (leaving a hole in the background)</li>
            <li><strong>Intelligent background reconstruction</strong> where the object was removed (inpainting the gap realistically)</li>
            <li><strong>Natural placement</strong> in the new location (blending edges, matching lighting, shadows)</li>
          </ul>
          <p className="experience-text">
            Existing tools required users to master multiple separate features (selection, erasure, cloning, 
            blending), creating high friction and poor results. The challenge was to collapse this multi-step 
            expert workflow into a single intuitive interaction powered by AI—users should simply be able to 
            select an object and drag it to a new position, with AI handling all the complexity automatically.
          </p>
          <p className="experience-text">
            Additionally, the system needed to handle edge cases gracefully: partially occluded objects, complex 
            backgrounds, lighting inconsistencies, and user expectations for "magical" results that looked 
            professionally edited. The feature also needed to ship at production quality with robust error 
            handling and observability for a massive user base.
          </p>
        </div>

        {/* PROJECT 1: GENERATIVE OBJECT MOVE */}
        <div className="project-section">
          <h4 className="project-title">Project 1: Generative Object Move - Multi-Model API Integration</h4>
          
          <div className="subsection">
            <h5 className="subsection-title">Context:</h5>
            <p className="experience-text">
              Building "Generative Object Move" required integrating and orchestrating two powerful but separate 
              AI APIs—SAM for object segmentation and DALL-E 3 for generative inpainting. Each API had different:
            </p>
            <ul className="context-list">
              <li><strong>Input/output formats</strong> (SAM needs bounding boxes/points and returns masks; DALL-E 3 needs masked images and prompts, returns generated pixels)</li>
              <li><strong>Latency characteristics</strong> (SAM: ~2-3 seconds; DALL-E 3: ~8-12 seconds)</li>
              <li><strong>Failure modes</strong> (network timeouts, rate limits, invalid outputs, API errors)</li>
              <li><strong>Cost considerations</strong> (API calls needed to be minimized while maintaining quality)</li>
            </ul>
            <p className="experience-text">
              The challenge was creating a robust pipeline that coordinated these APIs, handled image data 
              transformations between stages, provided real-time user feedback during multi-second processing 
              (10-15 seconds total), and gracefully degraded when APIs failed—all while maintaining high-quality 
              output and responsive UI interactions.
            </p>
          </div>

          <div className="subsection">
            <h5 className="subsection-title">Solutions:</h5>
            <ul className="solutions-list">
              <li>
                Architected a <strong>multi-stage orchestration pipeline</strong> using TypeScript that coordinates 
                SAM and DALL-E 3 API calls in sequence, managing asynchronous operations, handling intermediate 
                image transformations (format conversions, mask compositing, coordinate mapping), and maintaining 
                state consistency across API interactions.
              </li>
              <li>
                Integrated <strong>SAM API for automatic object segmentation</strong>—users provide clicks or 
                bounding boxes, and the system calls SAM to generate precise pixel-perfect segmentation masks. 
                Implemented prompt optimization (point selection strategies, bounding box refinement) to maximize 
                SAM accuracy for challenging cases like complex backgrounds or partial occlusions.
              </li>
              <li>
                Developed <strong>intelligent image preprocessing</strong> that prepares inputs for each API: 
                extracting object regions using SAM masks, compositing masks with original images, generating 
                context-aware text prompts for DALL-E 3 that describe the desired inpainting result (e.g., 
                "fill this area with background matching surrounding texture and lighting").
              </li>
              <li>
                Built <strong>dual-API workflow</strong> where SAM mask is used twice: (1) to erase the object 
                from its original position (creating a hole), and (2) to guide DALL-E 3 inpainting for both 
                background reconstruction and new object placement. Implemented mask feathering, edge blending, 
                and coordinate transformations to ensure seamless results.
              </li>
              <li>
                Created a <strong>responsive React UI</strong> that provides real-time visual feedback during 
                object movement. Users see a live preview as they drag objects, with progressive loading states 
                showing which stage is executing (e.g., "Analyzing object..." during SAM call, "Generating 
                background..." during DALL-E 3 call), reducing perceived wait time and keeping users informed.
              </li>
              <li>
                Implemented <strong>image optimization</strong> to reduce API costs and latency: downsizing 
                images before sending to APIs (while maintaining quality), cropping to regions of interest 
                rather than sending full images, and caching SAM segmentation results to avoid redundant API 
                calls when users adjust object placement.
              </li>
              <li>
                Built <strong>retry logic and fallback strategies</strong> for API failures: exponential backoff 
                for transient errors, graceful degradation when APIs are unavailable, and clear user-facing 
                error messages that explain issues without exposing technical details.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Microsoft2024;
