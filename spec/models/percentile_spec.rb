require 'spec_helper'

describe Percentile do
  it "#new" do
    expect(Percentile.new({})).to be_an_instance_of Percentile
  end

  let(:data_hash) do
    {"allallallall" => [0,0,0,0,0,0,0,0,0,0,0,0,0,157,208,208,208,208,2762,3640,3640,5940,6135,6135,6820,8735,8735,8735,8735,10256,11119,11119,11119,11119,12038,13648,13648,13648,14976,15961,15961,15961,15961,18478,18592,18592,19824,20880,20880,20880,21184,23660,23660,24369,25784,25784,25784,27484,28527,29488,30768,30768,30768,32336,33629,35524,35782,35782,38173,39186,40757,40757,41606,43873,45720,45720,48476,50118,50648,51210,54297,55772,58807,60638,61805,65208,67442,70694,73543,76750,80686,85475,90672,118813,173798,173798,173798,173798,173798,173798,173798]}
  end
  
  subject() { Percentile.new(data_hash) }

  it "#find" do
    expect(subject.find("allallallall", 100_000)).to eq 93
    expect(subject.find("allallallall", 153)).to eq 13
    expect(subject.find("allallallall", 200000)).to eq 100
  end
    it "#find with a negative salary" do
      expect(subject.find("allallallall", -23)).to raise_error(PercentileError)
    end
end