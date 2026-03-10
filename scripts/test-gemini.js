import os
from autogen import AssistantAgent, UserProxyAgent

# Configuration for DeepSeek
llm_config = {
    "config_list": [{
        "model": "deepseek-chat",
        "base_url": "https://api.deepseek.com/v1",
        "api_key": os.environ.get"sk-fae9c78194314f798679a918afd76fea,
    }]
}

# Define a Coding Agent
coder = AssistantAgent(
    name="Coder",
    llm_config=llm_config,
    system_message="You are a senior developer. Write Python code to solve tasks."
)

# Define a User Proxy to execute the code
user_proxy = UserProxyAgent(
    name="User",
    human_input_mode="NEVER",
    max_consecutive_auto_reply=10,
    is_termination_msg=lambda x: x.get("content", "").rstrip().endswith("TERMINATE"),
    code_execution_config={"work_dir": "coding", "use_docker": False}
)

# Start the collaboration
user_proxy.initiate_chat(coder, message="Write a script to scrape news from a website.")

