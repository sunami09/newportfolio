import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BerkeleyLab2023.css';

const BerkeleyLab2023: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="experience-detail-page">
      <button className="back-button" onClick={() => navigate('/experience')}>
        ← Back to Experience
      </button>

      <div className="experience-detail-content">
        <h1 className="company-name">Energy Sciences Network (ESnet)</h1>
        <h2 className="role-title">Software Engineering Intern</h2>
        <p className="date-range">May 2023 - May 2025</p>
        
        <div className="subsection">
          <h3 className="subsection-title">Summary:</h3>
          <ul className="summary-list">
            <li>
              Engineered a <strong>real-time network monitoring system</strong> for ESnet (Energy Sciences Network) 
              using <strong>Prometheus</strong>, <strong>Pushgateway</strong>, and <strong>Grafana</strong>, 
              providing centralized observability for high-performance research network flows supporting US Department 
              of Energy scientific facilities.
            </li>
            <li>
              Implemented <strong>automated L2 debugging script generation</strong> with parallel processing for 
              multiple concurrent network flows, boosting troubleshooting efficiency by <strong>50%</strong> and 
              reducing manual intervention in network incident response.
            </li>
            <li>
              Optimized system storage and deployment by refining <strong>Prometheus data retention policies</strong>, 
              introducing log rotation mechanisms, and containerizing the entire stack with <strong>Docker</strong>{' '}
              for reproducible deployments across ESnet infrastructure.
            </li>
          </ul>
        </div>

        {/* PROJECT: REAL-TIME NETWORK MONITORING */}
        <div className="project-section">
          <h4 className="project-title">Project: Real-Time Network Monitoring & Automated Debugging System (SENSE-RTMON)</h4>
          
          <div className="subsection">
            <h5 className="subsection-title">Context:</h5>
            <p className="experience-text">
              The Energy Sciences Network (ESnet) is a high-performance network connecting US Department of Energy 
              national laboratories, universities, and research facilities, supporting data-intensive scientific 
              collaborations that transfer petabytes of data for projects like particle physics experiments, climate 
              modeling, and genomics research. ESnet operates at <strong>100+ Gbps speeds</strong> with strict uptime 
              requirements and complex multi-layer network topologies.
            </p>
            <p className="experience-text">
              When network issues occurred—such as packet loss, latency spikes, or circuit failures—diagnosing 
              problems was extremely time-consuming. Network engineers needed to:
            </p>
            <ul className="context-list">
              <li>Manually gather metrics from distributed monitoring points across the network</li>
              <li>Correlate data from multiple flows and network layers (L2/L3) happening simultaneously</li>
              <li>Generate debugging scripts to probe specific network paths and interfaces</li>
              <li>Analyze logs scattered across different systems to identify root causes</li>
            </ul>
            <p className="experience-text">
              This manual troubleshooting process could take hours or even days for complex multi-flow issues, during 
              which time critical scientific data transfers were degraded or blocked, impacting researchers waiting 
              for time-sensitive experimental data.
            </p>
            <p className="experience-text">
              Additionally, visibility gaps existed: there was no centralized system to monitor network flows in 
              real-time, track historical performance trends, or proactively alert engineers before minor issues 
              escalated into major outages. The lack of automated tooling meant engineers spent more time on reactive 
              firefighting than proactive optimization.
            </p>
            <p className="experience-text">
              The challenge was to build a real-time monitoring and automated debugging system that could:
            </p>
            <ul className="context-list">
              <li>Provide centralized visibility into network health across distributed infrastructure</li>
              <li>Automatically detect anomalies and performance degradations</li>
              <li>Generate debugging scripts automatically for multiple concurrent flows</li>
              <li>Reduce mean time to resolution (MTTR) from hours to minutes</li>
              <li>Scale to handle hundreds of concurrent network flows without performance bottlenecks</li>
            </ul>
          </div>

          <div className="subsection">
            <h5 className="subsection-title">Solutions:</h5>
            <ul className="solutions-list">
              <li>
                Architected a <strong>distributed network monitoring system</strong> using Prometheus for time-series 
                metrics collection, Pushgateway for ephemeral job metrics from network devices, and Grafana for 
                real-time visualization dashboards. The system ingests network flow metrics (throughput, latency, 
                packet loss, jitter) from distributed monitoring points across ESnet infrastructure.
              </li>
              <li>
                Designed <strong>Prometheus metric collection pipeline</strong> that scrapes network device exporters, 
                processes flow statistics, and stores time-series data with custom labels (source/destination sites, 
                circuit IDs, protocol types). Implemented <strong>PromQL queries</strong> to detect anomalies like 
                throughput degradation below expected baselines, latency spikes exceeding thresholds, or asymmetric 
                routing issues.
              </li>
              <li>
                Built <strong>automated L2 debugging script generation system</strong> that analyzes network flow 
                state and automatically produces diagnostic commands for network engineers. When issues are detected, 
                the system generates scripts that probe specific interfaces, check MAC address tables, verify VLAN 
                configurations, and test circuit connectivity—eliminating manual script writing and reducing human 
                error.
              </li>
              <li>
                Implemented <strong>parallel processing</strong> to handle multiple concurrent network flows 
                simultaneously. The system can analyze dozens of flows in parallel, generate independent debugging 
                scripts for each, and prioritize critical flows (e.g., large-scale data transfers supporting 
                time-sensitive experiments). This architectural improvement boosted troubleshooting efficiency by 
                <strong> 50%</strong>, allowing engineers to diagnose complex multi-flow issues in minutes instead 
                of hours.
              </li>
              <li>
                Created <strong>Grafana dashboards</strong> with real-time and historical views: network topology 
                visualizations showing flow paths, per-circuit performance metrics, alerting thresholds with 
                color-coded health indicators, and drill-down capabilities to investigate specific flows. Engineers 
                can quickly identify problem areas and access automatically generated debugging scripts directly from 
                the UI.
              </li>
              <li>
                Optimized <strong>Prometheus data retention policies</strong> to balance storage costs with historical 
                analysis needs. Configured tiered retention: high-resolution metrics (15s intervals) retained for 7 
                days, downsampled metrics (5m intervals) for 90 days, and aggregated metrics (1h intervals) for 1 
                year. This reduced storage requirements by <strong>60%</strong> while preserving essential historical 
                data for trend analysis.
              </li>
              <li>
                Implemented <strong>log rotation mechanisms</strong> for application logs, Prometheus write-ahead logs 
                (WAL), and debugging script outputs to prevent disk space exhaustion. Configured automated compression 
                and archival of older logs, with retention policies aligned to compliance requirements for DOE 
                infrastructure.
              </li>
              <li>
                Containerized the entire monitoring stack using <strong>Docker and Docker Compose</strong>, creating 
                reproducible deployment environments. The containerized approach enabled:
                <ul className="nested-list">
                  <li>Consistent deployments across development, staging, and production environments</li>
                  <li>Rapid rollback capabilities if updates introduced issues</li>
                  <li>Simplified dependency management (no conflicts with host system packages)</li>
                  <li>Horizontal scaling by deploying additional Prometheus instances for high-cardinality metrics</li>
                  <li>Portable infrastructure that could be deployed to new ESnet sites with minimal configuration</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BerkeleyLab2023;
