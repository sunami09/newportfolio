import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Microsoft2025.css';

const Microsoft2025: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="experience-detail-page">
      <button className="back-button" onClick={() => navigate('/experience')}>
        ← Back to Experience
      </button>

      <div className="experience-detail-content">
        <h1 className="company-name">Microsoft</h1>
        <h2 className="role-title">Software Engineer Intern</h2>
        <p className="date-range">May 2025 - Aug 2025</p>
        
        <div className="subsection">
          <h3 className="subsection-title">Summary:</h3>
          <ul className="summary-list">
            <li>
              Developed an <strong>AI Prompt-to-Shader prototype</strong> that translates natural language 
              prompts into <strong>GLSL shader code</strong> using fine-tuned <strong>Llama 7B</strong> with 
              <strong> 4-bit quantization</strong>, dynamically loading generated shaders into the Smart Filter 
              Editor and reducing image editing complexity.
            </li>
            <li>
              Shipped high-performance <strong>GLSL-based image effects</strong> using <strong>Signed Distance 
              Fields (SDF)</strong> optimized to <strong>1.5ms per frame on GPU</strong>, 
              and extended <strong>Babylon.js WebGL rendering engine</strong> with multi-texture support for 
              advanced effects like masking and double exposure.
            </li>
            <li>
              Re-architected <strong>GLSL compute kernels</strong> to resolve warp divergence, improving 
              <strong> GPU utilization by 18%</strong> and creating developer-friendly APIs that simplified 
              shader integration for frontend engineers.
            </li>
          </ul>
        </div>

        {/* PROJECT 1: AI PROMPT-TO-SHADER */}
        <div className="project-section">
          <h4 className="project-title">Project 1: AI Prompt-to-Shader Generation</h4>
          
          <div className="subsection">
            <h5 className="subsection-title">Context:</h5>
            <p className="experience-text">
              Traditional image editing with AI models requires processing entire images through large neural 
              networks, consuming significant computational resources and tokens—especially for iterative edits. 
              While generative AI excels at creating images from scratch, directly editing existing images 
              token-efficiently remained challenging.
            </p>
            <p className="experience-text">
              However, <strong>shader code (GLSL)</strong> offers a fundamentally different approach: shaders 
              are lightweight GPU programs that apply mathematical transformations to pixels in real-time. The 
              insight was that while it's computationally expensive for AI to edit pixels directly, it's 
              relatively inexpensive for AI to generate code that edits pixels. Instead of the AI processing 
              millions of pixels, it could generate a few hundred lines of shader code that the GPU executes 
              instantly.
            </p>
            <p className="experience-text">
              This created an opportunity: could we fine-tune a language model to translate natural language 
              prompts like "add a vintage film grain effect" into executable GLSL shader code, effectively 
              turning code generation into a novel image editing paradigm?
            </p>
          </div>

          <div className="subsection">
            <h5 className="subsection-title">Solutions:</h5>
            <ul className="solutions-list">
              <li>
                Developed an <strong>AI Prompt-to-Shader prototype</strong> that translates natural language 
                prompts (NLP) into executable GLSL shader code, creating a token-efficient approach to 
                AI-powered image editing. Instead of processing pixel data through large models, the system 
                generates lightweight shader programs that GPUs execute in real-time.
              </li>
              <li>
                Fine-tuned <strong>Llama 7B language model</strong> using the <strong>Shaders21k dataset</strong>{' '}
                with <strong>QLoRA (Quantized Low-Rank Adaptation)</strong> and <strong>4-bit quantization</strong>{' '}
                for efficient training and inference. This approach enabled the model to learn shader programming 
                patterns while maintaining low memory footprint and fast generation times.
              </li>
              <li>
                Implemented <strong>dynamic shader loading</strong> into the Smart Filter Editor, allowing 
                generated GLSL code to be compiled and applied to images in real-time. The system validates 
                generated code for syntax correctness, handles compilation errors gracefully, and provides 
                immediate visual feedback to users.
              </li>
              <li>
                Architected the inference pipeline with <strong>quantization-aware serving</strong>, enabling 
                the AI model to generate shader code while consuming minimal 
                GPU memory, making real-time interactive image editing viable through code generation rather 
                than direct pixel manipulation.
              </li>
            </ul>
          </div>
        </div>

        {/* PROJECT 2: ADVANCED SHADER EFFECTS */}
        <div className="project-section">
          <h4 className="project-title">Project 2: Advanced Shader Effects & Babylon.js Extension</h4>
          
          <div className="subsection">
            <h5 className="subsection-title">Context:</h5>
            <p className="experience-text">
              Microsoft Designer's image editing capabilities relied on pre-built filters with limited 
              customization. The Smart Effects pipeline needed to support advanced shader-driven effects like 
              <strong> masking, double exposure, and edge detection</strong>—techniques that require multiple 
              texture inputs processed simultaneously by the GPU.
            </p>
            <p className="experience-text">
              However, the existing <strong>Babylon.js WebGL rendering engine</strong> integration only 
              supported single-texture shader operations, limiting the complexity of achievable effects. 
              Additionally, frontend engineers struggled to integrate sophisticated shader effects into the 
              UI because they needed deep knowledge of GLSL programming, WebGL rendering pipelines, and GPU 
              texture management.
            </p>
            <p className="experience-text">
              The challenge was twofold: extend the rendering engine to handle multi-texture shader operations 
              while abstracting away the complexity for frontend developers who needed to integrate these 
              effects into user-facing features.
            </p>
          </div>

          <div className="subsection">
            <h5 className="subsection-title">Solutions:</h5>
            <ul className="solutions-list">
              <li>
                Shipped production-ready <strong>GLSL-based image effects</strong> using advanced techniques 
                like <strong>Signed Distance Fields (SDF)</strong> for precise geometric masking and 
                for depth-aware effects, all optimized to run at 
                <strong> 1.5ms per frame on GPU</strong> for real-time 60fps performance.
              </li>
              <li>
                Extended the <strong>Babylon.js WebGL rendering engine</strong> by implementing 
                <strong> multi-texture support</strong> in the Smart Effects pipeline. This architectural 
                enhancement enabled shaders to simultaneously process multiple image inputs, unlocking advanced 
                effects like layer masking (combining foreground/background textures), double exposure blending, 
                and edge detection.
              </li>
              <li>
                Designed and implemented a <strong>developer-friendly API</strong> that abstracts shader 
                complexity for frontend engineers. The API provides high-level methods like 
                <code>applyEffect(effectName, parameters)</code> that internally manage texture binding, 
                uniform updates, and render passes—enabling UI integration without requiring GLSL expertise.
              </li>
              <li>
                Established <strong>shader effect templates with parameterization</strong>, allowing frontend 
                engineers to create customizable image filters by adjusting exposed parameters (intensity, 
                color, blur radius) without writing shader code, dramatically accelerating feature development.
              </li>
            </ul>
          </div>
        </div>

        {/* PROJECT 3: GPU OPTIMIZATION */}
        <div className="project-section">
          <h4 className="project-title">Project 3: GPU Performance Optimization</h4>
          
          <div className="subsection">
            <h5 className="subsection-title">Context:</h5>
            <p className="experience-text">
              The initial GLSL compute kernels suffered from <strong>warp divergence</strong>—a GPU performance 
              problem where threads within the same warp (a group of 32 threads on NVIDIA GPUs) take different 
              execution paths due to branching logic. When threads diverge, the GPU must serialize execution, 
              causing some threads to wait idle while others execute their branch, leading to underutilized GPU 
              cores and degraded performance.
            </p>
            <p className="experience-text">
              In image processing shaders with conditional logic (e.g., "if pixel brightness &gt; threshold, 
              apply effect A, else apply effect B"), different pixels often take different code paths, creating 
              severe warp divergence that reduced effective GPU throughput and increased frame processing time.
            </p>
          </div>

          <div className="subsection">
            <h5 className="subsection-title">Solutions:</h5>
            <ul className="solutions-list">
              <li>
                Re-architected GLSL compute kernels to minimize conditional branching by restructuring 
                algorithms to use <strong>branchless operations</strong> and mathematical functions that 
                eliminate if-else statements. For example, replaced conditional brightness thresholding with 
                <strong>smooth step functions</strong> that compute both paths and blend results mathematically.
              </li>
              <li>
                Achieved <strong>18% improvement in GPU utilization</strong>, measured through reduced warp 
                divergence metrics in <strong>NVIDIA Nsight profiler</strong>, resulting in faster image 
                effect rendering and improved responsiveness in the Smart Filter Editor during real-time 
                preview operations.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Microsoft2025;
