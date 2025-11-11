import React from 'react';
import './MoreExperience.css';

const MoreExperience: React.FC = () => {
  return (
    <div className="more-experience">
      <h2 className="more-experience-title">More Details</h2>
      
      <div className="experience-detail">
        <h3 className="company-name">Amazon</h3>
        <h4 className="role-title">Software Engineer Intern</h4>
        <p className="date-range">Aug 2025 - Present</p>
        
        <div className="subsection">
          <h5 className="subsection-title">Summary:</h5>
          <ul className="summary-list">
            <li>
              Enhanced Task Retirement Manager workflows with <strong>completion and failure 
              notifications</strong> using <strong>Java</strong>, giving customers real-time visibility into task 
              retirements and reducing escalations by <strong>30%</strong> when ECS replacements failed.
            </li>
            <li>
              Implemented notification solutions using <strong>AWS Lambda</strong>, <strong>EventBridge</strong>, 
              <strong>Step Functions</strong>, and <strong>QLDB</strong>, integrating with <strong>DynamoDB</strong> and 
              <strong>Silvermine</strong>, with batch API calls to reduce throttling across <strong>8M+ capacities</strong>.
            </li>
            <li>
              Implemented a gradual <strong>5%-per-minute traffic shift</strong> for Fargate platform rollouts 
              using <strong>Java</strong>, replacing the legacy 100% cutover, eliminating throttling incidents 
              and reducing migration failure rates by <strong>15%</strong>.
            </li>
          </ul>
        </div>

        {/* PROJECT 1: COMPLETION NOTIFICATIONS */}
        <div className="project-section">
          <h4 className="project-title">Project 1: Task Retirement Completion Notifications</h4>
          
          <div className="subsection">
            <h5 className="subsection-title">Context:</h5>
            <p className="experience-text">
              AWS Fargate manages over <strong>8 million containerized workloads</strong> that must be 
              regularly migrated to newer platform versions to address critical security vulnerabilities 
              and maintain system stability. The Task Retirement Manager (TRM) initiates these migrations 
              by notifying customers about upcoming retirements, then coordinating with the Resource 
              Lifecycle Manager (RLM) to gracefully replace tasks through ECS (Elastic Container Service).
            </p>
            <p className="experience-text">
              However, the existing system operated as a <strong>"fire-and-forget" model</strong>—customers 
              received initial retirement notifications but never learned whether their tasks were successfully 
              replaced or remained in service. Notifications would clear from dashboards after 7 days by default, 
              regardless of actual completion status, leaving customers uncertain about workload health.
            </p>
            <p className="experience-text">
              This created a <strong>critical visibility gap</strong>. Without completion feedback, customers 
              couldn't determine if their workloads were safely migrated, leading to unnecessary support tickets, 
              reduced confidence in AWS platform reliability, and difficulty tracking retirement progress across 
              large fleets of tasks.
            </p>
          </div>

          <div className="subsection">
            <h5 className="subsection-title">Solutions:</h5>
            <ul className="solutions-list">
              <li>
                Designed and implemented a <strong>Completion Notification Workflow</strong> that runs 
                periodically via <strong>EventBridge timer at 6AM UTC daily</strong> to identify completed 
                task retirements and automatically remove corresponding customer notifications, providing 
                real-time visibility into retirement status and closing the feedback loop.
              </li>
              <li>
                Built the solution using <strong>Platform Discovery Lambda</strong> to identify platforms 
                with completed automations, orchestrated by <strong>Step Functions</strong> that process 
                customers in batches with <strong>MaxConcurrency of 5</strong> to prevent throttling. Integrated 
                with <strong>DynamoDB tables</strong> (TaskRetirementPlatform, CustomerPVMapping, CompletionWorkflow) 
                to track completion status and notification state.
              </li>
              <li>
                Implemented intelligent notification management by querying <strong>THMBS (Task Host Manager 
                Backend Service)</strong> via DescribeCapacity API to verify no capacities are running on 
                completed platforms, then calling <strong>Silvermine PutEvent API</strong> to mark customer 
                notifications as complete and remove them from dashboards.
              </li>
              <li>
                Maintained the existing TRM-RLM architecture while adding a feedback loop that tracks 
                <code>customerTaskTerminatedAt</code> timestamps and workflow state pagination across 
                <strong>8M+ Fargate capacities</strong>, ensuring customers receive accurate completion 
                status for all retirement events.
              </li>
            </ul>
          </div>
        </div>

        {/* PROJECT 2: FAILURE NOTIFICATIONS */}
        <div className="project-section">
          <h4 className="project-title">Project 2: Task Retirement Failure Notifications</h4>
          
          <div className="subsection">
            <h5 className="subsection-title">Context:</h5>
            <p className="experience-text">
              When Fargate platform versions are identified as degraded due to security vulnerabilities or 
              stability issues, all customer tasks on that platform must be systematically retired and replaced 
              within mandatory <strong>30-day compliance windows</strong> for Critical Vulnerability and Exposure 
              (CVE) patches. The retirement process attempts graceful task replacement through ECS, allowing 
              customers a configured wait period (0, 7, or 14 days) to replace tasks themselves.
            </p>
            <p className="experience-text">
              However, when ECS fails to gracefully replace customer tasks and RLM must resort to <strong>forced 
              termination</strong>, customers receive <strong>no advance warning</strong> of this impending 
              disruption. This creates a critical gap where customers cannot proactively implement contingency 
              measures, activate backup systems, or redirect traffic before forced termination occurs.
            </p>
            <p className="experience-text">
              The lack of failure notifications led to <strong>30% increases in support escalations</strong>, 
              unexpected service disruptions appearing as unexplained outages, data loss from forcibly terminated 
              workloads, and cascading alerts causing operational confusion. Customer-facing teams couldn't 
              communicate potential service impacts, resulting in poor customer experience and reduced trust in 
              AWS platform reliability.
            </p>
          </div>

          <div className="subsection">
            <h5 className="subsection-title">Solutions:</h5>
            <ul className="solutions-list">
              <li>
                Implemented <strong>failure notifications within RLM's Terminator Activity</strong> by enhancing 
                the TRM→RLM event payload with <code>customer_id</code> and <code>platform_version</code> fields, 
                enabling precise tracking of which customers are affected when ECS task replacement fails and 
                forced termination becomes imminent.
              </li>
              <li>
                Created a <strong>new QLDB (Quantum Ledger Database) table</strong> to track failure notifications 
                per customer-platform version combination, ensuring idempotent notification delivery and preventing 
                duplicate alerts. The QLDB table stores immutable records with <code>automation_completed</code> 
                fields to manage notification lifecycle.
              </li>
              <li>
                Enhanced <strong>RLM's Terminator Activity</strong> to check capacity replacement status and 
                manage failure notifications in the tracking database. When ECS fails to complete replacement 
                by the retirement deadline, the activity triggers <strong>Silvermine Integration</strong> to 
                deliver advance warning notifications to customers through Personal Health Dashboard, EventBridge, 
                and email.
              </li>
              <li>
                Integrated with <strong>Silvermine notification service via PutEvent API</strong>, creating 
                notification infrastructure within RLM that delivers failure warnings before forced termination 
                occurs. This gives customers critical time to implement emergency response planning, activate 
                backup systems, and minimize service disruption across mission-critical workloads.
              </li>
            </ul>
          </div>
        </div>

        {/* PROJECT 3: GRADUAL ROLLOUT */}
        <div className="project-section">
          <h4 className="project-title">Project 3: Gradual Platform Rollout Traffic Shifting</h4>
          
          <div className="subsection">
            <h5 className="subsection-title">Context:</h5>
            <p className="experience-text">
              Fargate platform rollouts historically used a <strong>100% immediate cutover strategy</strong>, 
              where all new task launches instantly switched to the new platform version. This approach created 
              severe throttling incidents when rolling out changes across <strong>8M+ capacities</strong>, as 
              downstream services couldn't handle the sudden traffic spike, leading to cascading failures and 
              <strong>15% migration failure rates</strong>.
            </p>
          </div>

          <div className="subsection">
            <h5 className="subsection-title">Solutions:</h5>
            <ul className="solutions-list">
              <li>
                Implemented a <strong>gradual 5%-per-minute traffic shift mechanism</strong> using <strong>Java</strong>, 
                replacing the legacy 100% cutover approach. The solution progressively increases the percentage 
                of new tasks launched on the updated platform, allowing downstream services to scale appropriately 
                and completely <strong>eliminating throttling incidents</strong> during platform migrations.
              </li>
              <li>
                Reduced migration failure rates by <strong>15%</strong> and improved overall platform rollout 
                reliability across millions of containerized workloads, ensuring smooth transitions during 
                security updates and platform version changes.
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <p className="experience-text">
        Throughout my internship, I've had the opportunity to work on critical infrastructure projects 
        that directly impact millions of AWS customers. Each project challenged me to design scalable 
        solutions that balance customer experience, system reliability, and operational efficiency.
      </p>
      <p className="experience-text">
        My experience spans across serverless computing architectures, event-driven systems, distributed 
        databases, and large-scale orchestration workflows. I thrive in environments that demand both 
        technical excellence and thoughtful consideration of customer impact.
      </p>
      <p className="experience-text">
        Beyond coding, I'm passionate about writing maintainable systems, documenting architectural 
        decisions, and building solutions that make a measurable difference in customer experience and 
        platform reliability.
      </p>
    </div>
  );
};

export default MoreExperience;