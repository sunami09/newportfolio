import React from 'react';
import { useNavigate } from 'react-router-dom';
import './VideoStreaming.css';

const VideoStreaming: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="video-detail-page">
      <button className="back-button" onClick={() => navigate('/projects')}>
        ← Back to Projects
      </button>

      <div className="video-detail-content">
        <div className="header-row">
          <div>
            <h1 className="project-name">Video Streaming Platform with AI Conversational Assistant</h1>
          </div>

          <div className="project-links-top">
            <a
              href="https://github.com/sunami09/youtube-backend"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              aria-label="GitHub Repository"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>

            <a
              href="https://streamly-sunami.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              aria-label="Live Demo"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* SUMMARY - Now outside the box like Amazon2025 */}
      <div className="subsection" style={{ marginTop: '2.5rem', marginLeft: '0.5rem' }}>
        <h3 className="subsection-title">Summary:</h3>
        <p className="experience-text">
          This project is a cloud-native video platform that enables users to upload videos,
          automatically process and transcribe them, and interact with an AI assistant that
          provides intelligent, context-aware answers about video content. The system leverages
          Google Cloud Platform's serverless architecture combined with OpenAI's advanced
          AI models to deliver a seamless, scalable video analysis experience.
        </p>
      </div>

      {/* SYSTEM ARCHITECTURE OVERVIEW */}
      <div className="project-section">
        <h4 className="project-title">System Architecture Overview</h4>
        
        <div className="subsection">
          <h5 className="subsection-title">Architectural Design:</h5>
          <p className="experience-text">
            The application follows a <strong>microservices, event-driven architecture</strong> with three primary
            pipelines: <strong>Upload</strong>, <strong>Processing</strong>, and <strong>AI Interaction</strong>. 
            All components are serverless, ensuring automatic scaling and cost efficiency.
          </p>
        </div>

        <div className="subsection">
          <h5 className="subsection-title">Technology Stack:</h5>
          <ul className="solutions-list">
            <li><strong>Backend:</strong> Firebase Cloud Functions (Node.js/TypeScript)</li>
            <li><strong>Processing Layer:</strong> Cloud Run services for heavy computational tasks</li>
            <li><strong>Storage:</strong> Google Cloud Storage (multiple buckets) + Cloud Firestore</li>
            <li><strong>AI/ML:</strong> OpenAI GPT-4o (chat) and Whisper (transcription)</li>
            <li><strong>Messaging:</strong> Google Cloud Pub/Sub for event-driven workflows</li>
          </ul>
        </div>
      </div>

      {/* UPLOAD PIPELINE */}
      <div className="project-section">
        <h4 className="project-title">Upload Pipeline</h4>
        
        <div className="subsection">
          <h5 className="subsection-title">Architecture Diagram:</h5>
          <img 
            src="/video-streaming-diagrams/uploadflow.svg" 
            alt="Upload Pipeline Diagram" 
            className="video-streaming-diagram" 
            style={{ width: '100%', maxWidth: 600, margin: '0 auto', display: 'block' }} 
          />
        </div>

        <div className="subsection">
          <h5 className="subsection-title">Detailed Pipeline Flow:</h5>
          <ul className="solutions-list">
            <li>User selects a video file in the browser interface</li>
            <li>Frontend authenticates the user with <strong>Firebase Authentication</strong></li>
            <li>Frontend calls <code>generateUploadUrl()</code> Cloud Function with file metadata</li>
            <li>
              Cloud Function verifies authentication and generates a signed URL with: unique filename 
              (<code>userId-timestamp-extension</code>), 15-minute expiration, write-only permissions, 
              and 1GB file size limit
            </li>
            <li>Signed URL is returned to the frontend</li>
            <li>Frontend uploads the video directly to the <strong>Raw Video Storage</strong> bucket using the signed URL</li>
            <li>Upload completion triggers the next pipeline (video processing)</li>
          </ul>
        </div>
      </div>

      {/* VIDEO TRANSCRIPTION PIPELINE */}
      <div className="project-section">
        <h4 className="project-title">Video Transcription Pipeline</h4>
        
        <div className="subsection">
          <h5 className="subsection-title">Architecture Diagram:</h5>
          <img 
            src="/video-streaming-diagrams/videotranscription.svg" 
            alt="Video Transcription Pipeline Diagram" 
            className="video-streaming-diagram" 
            style={{ width: '100%', maxWidth: 900, margin: '0 auto', display: 'block' }} 
          />
        </div>

        <div className="subsection">
          <h5 className="subsection-title">Detailed Pipeline Flow:</h5>
          <ul className="solutions-list">
            <li>Trigger: <strong>Raw Video Bucket</strong> object finalize event</li>
            <li>Raw Video Bucket publishes message to <strong>Pub/Sub</strong> topic when video upload completes</li>
            <li>Pub/Sub triggers <strong>Cloud Run</strong> function endpoint with video metadata (bucket name, file path, content type, size)</li>
            <li>Cloud Run function downloads video from <strong>Raw Video Bucket</strong> using metadata from <strong>Pub/Sub</strong> message</li>
            <li>Cloud Run function updates <strong>Firestore</strong> document with status "processing" and video ID</li>
            <li>Cloud Run function processes video using <strong>Whisper API</strong> to generate transcription</li>
            <li>Cloud Run function uploads transcript file to <strong>Firebase Storage</strong> (separate <strong>Transcripts Bucket</strong>)</li>
            <li>Cloud Run function uploads processed video to <strong>Processed Video Bucket</strong></li>
            <li>Cloud Run function updates <strong>Firestore</strong> document with status "completed", transcript URL, and processed video URL</li>
            <li>Frontend can poll or listen to Firestore for status updates and retrieve processed video and transcript URLs when complete</li>
          </ul>
        </div>
      </div>

      {/* AI CONVERSATIONAL FEATURES */}
      <div className="project-section">
        <h4 className="project-title">AI Conversational Features</h4>
        
        <div className="subsection">
          <h5 className="subsection-title">Implementation Details:</h5>
          <ul className="solutions-list">
            <li>
              <strong>Context-Aware Responses:</strong> AI assistant maintains conversation history and 
              video transcript context to provide accurate, relevant answers about video content
            </li>
            <li>
              <strong>Multi-Modal Processing:</strong> Combines video metadata, transcriptions, and user 
              queries to generate comprehensive insights
            </li>
            <li>
              <strong>Scalable Architecture:</strong> Serverless design automatically handles varying loads 
              from single users to thousands of concurrent sessions
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VideoStreaming;